import { fetchProduct } from "../api/products.js";
import { Component, renderComponent } from "../modules/MyReact.js";
import ProductList from "../components/ProductList.js";
import { asyncHandler, asyncInitState } from "../modules/asyncHandler.js";
import ProductDetail from "../components/ProductDetail.js";

class ProductDetailPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: asyncInitState,
      selectedOptions: [],
    };

    const { parent } = this.props;
    this.container = parent;

    this.initState();
  }

  initState() {
    const { productId } = this.props;
    this.fetch(productId);
  }

  async fetch(productId) {
    asyncHandler.setLoading.call(this, "productInfo");
    const { isError, data } = await fetchProduct(productId);
    if (!isError) {
      asyncHandler.setData.call(this, "productInfo", data);
    } else {
      asyncHandler.setError.call(this, "productInfo", data);
    }
  }

  addEvents() {
    const select = this.container.querySelector(
      ".ProductDetail__info > select"
    );
    if (select) {
      select.addEventListener("change", this.handleSelectOption);
    }

    const selectedOptions = this.container.querySelector(
      ".ProductDetail__selectedOptions > ul"
    );

    if (selectedOptions) {
      selectedOptions.addEventListener("change", this.handleChangeOptionQty);
    }

    const orderBtn = this.container.querySelector(".OrderButton");

    if (orderBtn) {
      orderBtn.addEventListener("click", this.handleOrder);
    }
  }

  handleOrder = (e) => {
    const {
      productInfo: { data },
      selectedOptions,
    } = this.state;

    const order = selectedOptions.map((o) => {
      return {
        productId: data.id,
        optionId: o.optionId,
        quantity: o.qty,
      };
    });

    localStorage.setItem("products_cart", JSON.stringify(order));
  };

  handleSelectOption = (e) => {
    const optionId = Number(e.target.value);
    const {
      selectedOptions,
      productInfo: {
        data: { productOptions },
      },
    } = this.state;

    if (selectedOptions.map((op) => op.optionId).includes(optionId)) {
      return;
    }

    const optionInfo = productOptions.find((p) => p.id === optionId);

    if (!optionInfo) {
      return;
    }

    // 재고가 0이면 X
    if (optionInfo.stock === 0) {
      return;
    }

    const option = {
      optionId,
      name: optionInfo.name,
      price: optionInfo.price,
      qty: 1,
    };
    const newSelected = [...selectedOptions, option];
    this.setState({ selectedOptions: newSelected });
  };

  handleChangeOptionQty = (e) => {
    const {
      selectedOptions,
      productInfo: {
        data: { productOptions },
      },
    } = this.state;

    const inputQty = e.target.value;
    const id = Number(e.target.dataset.id);

    if (!id) {
      return;
    }

    const current = selectedOptions.find((o) => o.optionId === id);

    if (!current) {
      return;
    }

    if (inputQty === "") {
      e.target.value = current.qty;
      return;
    }
    const optionInfo = productOptions.find((p) => p.id === id);

    if (!optionInfo) {
      return;
    }

    const stock = optionInfo.stock;

    if (inputQty > stock) {
      e.target.value = stock;
    }

    if (inputQty < 1) {
      e.target.value = 1;
    }

    current.qty = e.target.value;
    console.log("c", current);
    this.setState({ selectedOptions: [...selectedOptions] });
  };

  render() {
    this.container.innerHTML = "";

    const { history } = this.props;
    const { productInfo, selectedOptions } = this.state;

    renderComponent(
      ProductDetail,
      {
        productInfo,
        selectedOptions,
        history,
      },
      this.container
    );

    this.addEvents();
    return this.container;
  }
}

export default ProductDetailPageContainer;

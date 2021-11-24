import { fetchProducts } from "../api/products.js";
import { Component, renderComponent } from "../modules/MyReact.js";
import ProductList from "../components/ProductList.js";
import { asyncHandler, asyncInitState } from "../modules/asyncHandler.js";

class ProductListPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInfo: asyncInitState,
    };

    const { parent } = this.props;

    this.container = parent;

    this.initState();
  }

  initState() {
    this.fetch();
  }

  fetch = async () => {
    asyncHandler.setLoading.call(this, "productsInfo");
    const { isError, data } = await fetchProducts();
    if (!isError) {
      asyncHandler.setData.call(this, "productsInfo", data);
    } else {
      asyncHandler.setError.call(this, "productsInfo", data);
    }
  };

  handleProductPageClick = async (productId) => {
    this.props.history.push(`/products/${productId}`);
  };

  addEvents() {
    const productBox = document.querySelector(".ProductListPage > ul");

    if (productBox) {
      productBox.addEventListener("click", (e) => {
        console.log("e", e);
        const { id } = e.target.dataset;
        const { history } = this.props;

        history.push(`/web/products/${id}`);
      });
    }
  }

  render() {
    this.container.innerHTML = "";
    const { history } = this.props;
    const { productsInfo } = this.state;
    renderComponent(
      ProductList,
      {
        productsInfo,
        onProductPageClick: this.handleProductPageClick,
        history,
      },
      this.container
    );

    this.addEvents();
    return this.container;
  }
}

export default ProductListPageContainer;

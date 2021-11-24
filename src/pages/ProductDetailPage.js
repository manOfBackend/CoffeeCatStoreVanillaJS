import ProductDetailPageContainer from "../containers/ProductDetailPageContainer.js";
import { Component, renderComponent } from "../modules/MyReact.js";

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
    };
    this.container = document.createElement("div");
    this.container.className = "ProductDetailPage";
  }

  render() {
    this.container.innerHTML = "";
    const { history, match } = this.props;
    const { productName } = this.state;

    const productId = match.params.productId;
    console.log("detailpage");
    renderComponent(
      ProductDetailPageContainer,
      {
        history,
        productId,
        parent: this.container,
      },
      this.container
    );
    return this.container;
  }
}

export default ProductDetailPage;

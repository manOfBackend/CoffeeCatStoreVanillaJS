import ProductDetailPageContainer from "../containers/ProductDetailPageContainer.js";
import { Component, renderComponent } from "../modules/MyReact.js";

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
    this.container.className = "ProductDetailPage";
  }

  render() {
    this.container.innerHTML = "";
    const { history, match } = this.props;

    renderComponent(ProductDetailPageContainer, { history }, this.container);
    return this.container;
  }
}

export default ProductDetailPage;

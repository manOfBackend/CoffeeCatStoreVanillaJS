import ProductListPageContainer from "../containers/ProdctListPageContainer.js";
import { Component, renderComponent } from "../modules/MyReact.js";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
    this.container.className = "ProductListPage";
  }

  render() {
    this.container.innerHTML = "";
    const { history, match } = this.props;
    renderComponent(
      ProductListPageContainer,
      { history, parent: this.container },
      this.container
    );
    return this.container;
  }
}

export default ProductListPage;

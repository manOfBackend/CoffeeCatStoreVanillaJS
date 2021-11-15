import { Component } from "../modules/MyReact.js";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement("div");
    this.container.className = "ProductListPage";
  }

  render() {
    this.container.innerHTML = "";

    const container = document.createElement("div");
    container.className = "";

    const {
      productsInfo: { loading, data, error },
      onProductPageClick,
      history,
    } = this.props;

    if (!data) return this.container;

    const { products } = data;
  }
}

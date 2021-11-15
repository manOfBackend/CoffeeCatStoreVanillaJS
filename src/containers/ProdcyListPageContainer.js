import { Component, renderComponent } from "../modules/MyReact";

class ProductListPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInfo: [],
    };

    this.container = document.createElement("div");

    this.initState();
  }

  initState() {
    const { pageNumber } = this.props;
    // this.fetch();
  }

  handleProductPageClick = async (productId) => {
    this.props.history.push(`/products/${productId}`);
  };

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

    return this.container;
  }
}

export default ProductListPageContainer;

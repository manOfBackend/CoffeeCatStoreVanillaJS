import { Component } from "../modules/MyReact.js";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
  }

  render() {
    this.container.innerHTML = "";

    const { history, match } = this.props;
    const pageNumber = match.params.pageNumber;

    renderComponent(
      ProductListPageContainer,
      { history, pageNumber },
      this.container
    );
    return this.container;
  }
}

export default ProductListPage;

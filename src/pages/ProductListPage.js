import { Component } from "../modules/MyReact.js";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
    this.container.className = "ProductListPage";
  }

  render() {
    this.container.innerHTML = "상품 목록 페이지";
    const { history, match } = this.props;
    const pageNumber = match.params.pageNumber;

    // renderComponent(
    //   ProductListPageContainer,
    //   { history, pageNumber },
    //   this.container
    // );
    return this.container;
  }
}

export default ProductListPage;

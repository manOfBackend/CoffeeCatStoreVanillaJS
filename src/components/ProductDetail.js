import { Component } from "../modules/MyReact.js";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.container = document.createDocumentFragment();
  }

  render() {
    this.container.innerHTML = "";
    const {
      productInfo: { loading, data, error },
      onProductPageClick,
      history,
    } = this.props;

    if (!data) return this.container;
    const title = document.createElement("h1");
    title.innerText = `${data.name} 상품 정보`;
    this.container.appendChild(title);

    const ul = document.createElement("ul");

    for (const product of data) {
      const li = document.createElement("li");
      li.className = "Product";
      li.dataset.id = product.id;

      const img = document.createElement("img");
      img.src = product.imageUrl;

      const info = document.createElement("div");
      info.className = "Product__info";

      const name = document.createElement("div");
      name.innerText = product.name;
      const price = document.createElement("div");
      price.innerText = product.price;

      info.appendChild(name);
      info.appendChild(price);

      li.appendChild(img);
      li.appendChild(info);

      ul.appendChild(li);
    }

    this.container.appendChild(ul);

    return this.container;
  }
}

export default ProductDetail;

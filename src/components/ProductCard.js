class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);

    const { product } = this.props;
    this.container = document.createElement("li");
    this.container.className = "Product";
    this.container.addEventListener("click", (e) =>
      this.handleLinkClick(e, `/products/${product.id}`)
    );
  }

  handleLinkClick(e, path) {
    e.preventDefault();
    this.props.history.push(path);
  }

  render() {
    this.container.innerHTML = "";

    const { product } = this.props;

    const img = document.createElement("img");
    img.setAttribute("src", product.src);
    this.container.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "Product__info";
    this.container.appendChild(cardBody);

    const title = document.createElement("div");
    title.innerText = product.name;
    cardBody.appendChild(title);

    const price = document.createElement("div");
    price.innerText = product.price;
    cardBody.appendChild(price);

    return this.container;
  }
}

export default ProductCard;

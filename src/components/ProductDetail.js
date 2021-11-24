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
      selectedOptions,
      onProductPageClick,
      history,
    } = this.props;

    if (!data) return this.container;

    const title = document.createElement("h1");
    title.innerText = `${data.name} 상품 정보`;
    this.container.appendChild(title);

    const detail = document.createElement("div");
    detail.className = "ProductDetail";

    {
      const img = document.createElement("img");
      img.src = data.imageUrl;

      const detailInfo = document.createElement("div");
      detailInfo.className = "ProductDetail__info";
      {
        const name = document.createElement("h2");
        name.innerText = data.name;

        const price = document.createElement("div");
        price.className = "ProductDetail__price";
        price.innerText = `${data.price.toLocaleString()}원~`;

        const select = document.createElement("select");
        const defaultOption = document.createElement("option");
        defaultOption.innerText = "선택하세요";

        select.appendChild(defaultOption);
        for (const _option of data.productOptions) {
          const option = document.createElement("option");
          option.value = _option.id;

          const price = _option.price;
          const stock = _option.stock;

          if (stock === 0) {
            option.innerText = `${data.name} ${_option.name}`;
            option.disabled = true;
          } else if (price === 0) {
            option.innerText = `${data.name} ${_option.name}`;
          } else {
            option.innerText = `${data.name} ${
              _option.name
            } (+${_option.price.toLocaleString()}원)`;
          }
          select.appendChild(option);
        }
        const selectedOptionsBox = document.createElement("div");
        selectedOptionsBox.className = "ProductDetail__selectedOptions";
        {
          const title = document.createElement("h3");
          title.innerText = "선택된 상품";

          const ul = document.createElement("ul");

          let totalPrice = 0;
          for (const option of selectedOptions) {
            const sumPrice = data.price + option.price;
            const li = document.createElement("li");
            li.innerText = `${data.name} ${
              option.name
            } ${sumPrice.toLocaleString()}원`;

            const div = document.createElement("div");
            div.innerText = "개";
            const input = document.createElement("input");
            input.type = "number";
            input.dataset.id = option.optionId;
            input.value = option.qty;
            div.prepend(input);

            li.appendChild(div);
            ul.appendChild(li);

            totalPrice += data.price + option.price;
            totalPrice *= option.qty;
          }

          const totalPriceBox = document.createElement("div");
          totalPriceBox.className = "ProductDetail__totalPrice";
          totalPriceBox.innerText = `${totalPrice.toLocaleString()}원`;

          const submitBtn = document.createElement("button");
          submitBtn.className = "OrderButton";
          submitBtn.innerText = "주문하기";

          selectedOptionsBox.appendChild(title);
          selectedOptionsBox.appendChild(ul);
          selectedOptionsBox.appendChild(totalPriceBox);
          selectedOptionsBox.appendChild(submitBtn);
        }

        detailInfo.appendChild(name);
        detailInfo.appendChild(price);
        detailInfo.appendChild(select);
        detailInfo.appendChild(selectedOptionsBox);
      }
      detail.appendChild(img);

      detail.appendChild(detailInfo);
    }

    this.container.appendChild(detail);

    return this.container;
  }
}

export default ProductDetail;

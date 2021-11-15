import { Component } from "./MyReact.js";

class DefaultNotFoundComponent extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
  }
  render() {
    this.container.innerHTML = "";

    const message = document.createElement("h3");
    message.innerText = "Not Found";
    this.container.appendChild(message);

    return this.container;
  }
}

class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
  }

  parseCurrentPath() {
    const { path, routes } = this.props;
  }
}

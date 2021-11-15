import { Component } from "./modules/MyReact.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: location.pathname,
    };

    this.container = document.createElement("div");
  }

  render() {
    this.container.innerHTML = "";
  }
}

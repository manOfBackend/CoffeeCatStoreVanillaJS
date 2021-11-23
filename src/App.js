import BrowserRouter from "./modules/BrowserRouter.js";
import { Component, renderComponent } from "./modules/MyReact.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import ProductListPage from "./pages/ProductListPage.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: location.pathname,
    };

    this.container = document.createDocumentFragment();

    window.addEventListener("popstate", this.handlePopState);
  }

  push(path) {
    if (path === this.state.path) return;
    history.pushState({ path }, "", path);
    this.setState({ path });
  }

  goBack = () => {
    history.back();
  };

  handlePopState = (e) => {
    this.setState({
      path: location.pathname,
    });
  };

  render() {
    this.container.innerHTML = "";

    const { path } = this.state;
    console.log("main");
    renderComponent(
      BrowserRouter,
      {
        path,
        history: {
          push: this.push,
          goBack: this.goBack,
        },
        routes: [
          {
            path: "/web",
            Component: ProductListPage,
          },
        ],
      },
      this.container
    );

    return this.container;
  }
}

export default App;

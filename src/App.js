import BrowserRouter from "./modules/BrowserRouter.js";
import { Component, renderComponent } from "./modules/MyReact.js";
import ProductListPage from "./pages/ProductListPage.js";

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

    const { path } = this.state;
    console.log("App 렌더링");
    renderComponent(
      BrowserRouter,
      {
        path,
        history: {
          push: () => {},
          goBack: () => {},
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

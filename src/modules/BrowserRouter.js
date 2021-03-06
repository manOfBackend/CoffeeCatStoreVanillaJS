import { Component, renderComponent } from "./MyReact.js";

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
    this.container = document.createDocumentFragment();
  }

  parseCurrentPath() {
    const { path, routes } = this.props;

    const currentPathTokens = path
      .split("?")[0]
      .split("/")
      .filter((p) => !!p);

    console.log("current", currentPathTokens);

    const routePaths = routes.map((r) => r.path);
    let pathKey = "";
    let params = {};
    for (let i = 0; i < routePaths.length; i++) {
      const routePathTokens = routePaths[i].split("/").filter((p) => !!p);

      console.log("routePathTokens", routePathTokens);
      let isMatch = true;
      let tempParams = {};
      if (routePathTokens.length !== currentPathTokens.length) {
        isMatch = false;
        continue;
      }

      currentPathTokens.forEach((token, idx) => {
        if (routePathTokens[idx] !== token) {
          isMatch = false;
        }
        if (routePathTokens[idx].startsWith(":")) {
          tempParams[routePathTokens[idx].slice(1)] = token;
          isMatch = true;
        }
      });

      if (isMatch) {
        pathKey = routePaths[i];
        params = { ...tempParams };
        break;
      }
    }
    return {
      pathKey,
      params,
    };
  }

  render() {
    this.container.innerHTML = "";

    const { routes, history } = this.props;
    const { pathKey, params } = this.parseCurrentPath();

    const targetRoute = routes.find((route) => route.path === pathKey);

    const route = targetRoute ?? { Component: DefaultNotFoundComponent };

    console.log("route", route);
    const { Component, props } = route;

    renderComponent(
      Component,
      {
        history,
        match: { params },
        ...props,
      },
      this.container
    );
    console.log("router", this.container);

    return this.container;
  }
}

export default BrowserRouter;

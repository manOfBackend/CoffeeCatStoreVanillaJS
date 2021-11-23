import { request } from "./request.js";

export const FETCH_PRODUCTS_API =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

export const fetchProducts = async () => {
  try {
    const products = await request(FETCH_PRODUCTS_API, "GET");
    console.log("products", products);
    return {
      isError: false,
      data: products,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

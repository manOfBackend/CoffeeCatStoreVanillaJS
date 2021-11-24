import { request } from "./request.js";

export const API_ENDPOINT =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com";

export const fetchProducts = async () => {
  try {
    const products = await request(`${API_ENDPOINT}/dev/products`, "GET");
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

export const fetchProduct = async (productId) => {
  try {
    const product = await request(
      `${API_ENDPOINT}/dev/products/${productId}`,
      "GET"
    );
    return {
      isError: false,
      data: product,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

import requestData from "./requestData.js";

export async function getProducts() {
  try {
    const resp = await requestData(
      "GET",
      "http://127.0.0.1:3000/products",
      null
    );

    if (resp) {
      return JSON.parse(resp);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getProduct(id) {
  try {
    const resp = await requestData(
      "GET",
      `http://127.0.0.1:3000/products/${id}`,
      null
    );

    if (resp) {
      return JSON.parse(resp);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function postProduct(product) {
  try {
    await requestData("POST", "http://127.0.0.1:3000/products", product);
  } catch (e) {
    console.log(e);
  }
}

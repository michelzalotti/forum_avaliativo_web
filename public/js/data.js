import requestData from "./requestData.js";

async function getProducts() {
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

export default getProducts;

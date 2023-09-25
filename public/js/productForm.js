import validateFields, { clearErrors } from "./formValidator.js";
import refreshTable from "./productsTable.js";
import { getProduct, postProduct, updateProduct } from "./data.js";
import { currencyFormat, currencyToNumber } from "./utilities.js";
import { product } from "./data.js";

const formWindow = document.querySelector("#product-form");
const formProductId = document.querySelector("#product-id");
const formProductName = document.querySelector("#product-name");
const formProductPrice = document.querySelector("#product-price");
const formCancelButton = document.querySelector("#btn-cancel");
const formConfirmButton = document.querySelector("#btn-confirm");
const windowTitle = formWindow.querySelector(".window-title");

function openForm(title) {
  const id = product.id;

  windowTitle.innerText = title;
  formProductId.value = "";
  formProductName.value = "";
  formProductPrice.value = "";

  formWindow.style.display = "block";
  clearErrors();

  if (id) {
    getData(id);
    formProductId.setAttribute("disabled", "disabled");
  }

  formCancelButton.addEventListener("click", cancelButtonEvent);
  formConfirmButton.addEventListener("click", confirmButtonEvent);
}

function cancelButtonEvent(e) {
  e.preventDefault();
  closeForm();
}

function confirmButtonEvent(e) {
  e.preventDefault();

  console.log("Salvou!");

  if (saveData(product.id)) {
    closeForm();
  }
}

function closeForm() {
  removeEventListener("click", cancelButtonEvent);
  removeEventListener("click", confirmButtonEvent);
  formWindow.style.display = "none";
  refreshTable();
}

async function getData(id) {
  try {
    const product = await getProduct(id);

    if (product) {
      formProductId.value = product.id;
      formProductName.value = product.name;
      const price = currencyFormat(product.price).replace("R$", "");
      formProductPrice.value = price;
    }
  } catch (e) {
    console.log(e);
  }
}

function saveData(id) {
  const formFields = {
    id: formProductId,
    name: formProductName,
    price: formProductPrice,
  };

  if (validateFields(formFields)) {
    const product = {
      id: parseInt(formFields.id.value),
      name: formFields.name.value,
      price: currencyToNumber(formFields.price.value),
    };

    if (id) {
      console.log("Atualizou", product);
      updateProduct(product.id, JSON.stringify(product));
    } else if (id === null) {
      console.log("Salvou", product);
      postProduct(JSON.stringify(product));
    }

    return true;
  } else {
    return false;
  }
}

export { formWindow as default, openForm };

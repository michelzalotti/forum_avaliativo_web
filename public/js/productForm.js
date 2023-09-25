import validateFields, { clearErrors } from "./formValidator.js";
import refreshTable from "./productsTable.js";
import { getProduct, postProduct } from "./data.js";
import { currencyFormat, currencyToNumber } from "./utilities.js";

const formWindow = document.querySelector("#product-form");
const formProductId = document.querySelector("#product-id");
const formProductName = document.querySelector("#product-name");
const formProductPrice = document.querySelector("#product-price");
const formCancelButton = document.querySelector("#btn-cancel");
const formConfirmButton = document.querySelector("#btn-confirm");
const windowTitle = formWindow.querySelector(".window-title");

function openForm(title, id) {
  windowTitle.innerText = title;
  formProductId.value = "";
  formProductName.value = "";
  formProductPrice.value = "";

  formWindow.style.display = "block";
  clearErrors();

  if (id !== 0) getData(id);

  formCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
  });

  formConfirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (id === 0) {
      saveData();
      closeForm();
      refreshTable();
    } else {
      updateData();
    }
  });
}

function closeForm() {
  formWindow.style.display = "none";
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

function saveData() {
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

    postProduct(JSON.stringify(product));
  }
}

function updateData() {}

export { formWindow as default, openForm };

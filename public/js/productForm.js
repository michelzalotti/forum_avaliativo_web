import validateFields, { clearErrors } from "./formValidator.js";

const formWindow = document.querySelector("#product-form");
const formProductId = document.querySelector("#product-id");
const formProductName = document.querySelector("#product-name");
const formProductPrice = document.querySelector("#product-price");
const formCancelButton = document.querySelector("#btn-cancel");
const formConfirmButton = document.querySelector("#btn-confirm");
const windowTitle = formWindow.querySelector(".window-title");

function openForm(title, mode) {
  windowTitle.innerText = title;
  formProductId.value = "";
  formProductName.value = "";
  formProductPrice.value = "";

  formWindow.style.display = "block";
  clearErrors();

  formCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
  });

  formConfirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (mode === 1) {
      saveData();
    } else {
      updateData();
    }
  });
}

function closeForm() {
  formWindow.style.display = "none";
}

function saveData() {
  const formFields = {
    id: formProductId,
    name: formProductName,
    price: formProductPrice,
  };

  if (validateFields(formFields)) {
  }
}

function updateData() {
    
}

export { formWindow as default, openForm };

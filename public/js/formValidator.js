import formWindow from "./productForm.js";

function validateFields(formFields) {
  let price = formFields.price.value;
  clearErrors();

  if (formFields.id.value === "" || formFields.id.value < 0) {
    errorMessage(formFields.id, "Valor inválido para o campo!");
  }

  if (formFields.name.value === "" || formFields.name.value.length < 3) {
    errorMessage(formFields.name, "Valor inválido para o campo!");
  }

  if (price === "" || price.length < 3) {
    errorMessage(formFields.price, "Valor inválido para o campo!");
  }
}

function clearErrors() {
  const errors = formWindow.querySelectorAll(".error-message");
  errors.forEach((e) => e.remove());
}

function errorMessage(field, msg) {
  let spanError = field.parentElement.querySelector(".error-message");

  if (!spanError) {
    spanError = document.createElement("span");
    spanError.classList.add("error-message");
    spanError.innerText = msg;

    field.parentElement.appendChild(spanError);
  }
}

export { validateFields as default, clearErrors };

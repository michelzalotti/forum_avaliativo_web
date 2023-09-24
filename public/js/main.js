import { openForm } from "./productForm.js";

const addProductBtn = document.querySelector("#add-product");
const editProductBtn = document.querySelector(".btn-edit");

addProductBtn.addEventListener("click", (e) => {
  openForm("Adicionar Produto", 1);
});

editProductBtn.addEventListener("click", (e) => {
  openForm("Editar Produto", 0);
});

import { openForm } from "./productForm.js";
import refreshTable from "./productsTable.js";

const addProductBtn = document.querySelector("#add-product");

addProductBtn.addEventListener("click", (e) => {
  openForm("Adicionar Produto", 1);
});

refreshTable();

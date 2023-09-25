import getProducts from "./data.js";
import { currencyFormat } from "./utilities.js";

const productsTable = document.querySelector(".products tbody");

async function refreshTable(data) {
  try {
    addData(await getProducts());
  } catch (e) {
    console.log(e);
  }
}

async function addData(data) {
  await data.forEach((d) => {
    const tr = createDataRow(d);
    productsTable.appendChild(tr);
  });
}

function createDataRow(dataRow) {
  const tr = document.createElement("tr");

  for (let [k, v] of Object.entries(dataRow)) {
    const td = document.createElement("td");

    if (k === "price") {
      td.innerText = currencyFormat(v);
    } else {
      td.innerText = v;
    }

    tr.appendChild(td);
  }

  tr.appendChild(createRowControls(dataRow.id));
  return tr;
}

function createRowControls(id) {
  const td = document.createElement("td");

  const div = document.createElement("div");
  div.classList.add("controls");

  const btnEdit = createButtons("btn-edit", "Editar Produto", id);
  const btnDelete = createButtons("btn-delete", "Excluir Produto", id);

  div.appendChild(btnEdit);
  div.appendChild(btnDelete);

  td.appendChild(div);

  return td;
}

function createButtons(type, title, id) {
  const btn = document.createElement("button");
  btn.classList.add("btn", type);
  btn.setAttribute("title", title);
  btn.setAttribute("data-id", id);

  return btn;
}

export default refreshTable;

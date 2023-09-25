export function currencyFormat(v) {
  return v.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

export function currencyToNumber(v) {
  return Number.parseFloat(v.replace(".", "").replace(",", "."));
}

export function currencyFormat(v) {
  return v.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

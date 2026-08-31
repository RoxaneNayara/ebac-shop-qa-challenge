export function formatItemCount(quantity: number): string {
  return quantity === 1 ? "1 item" : `${quantity} itens`;
}

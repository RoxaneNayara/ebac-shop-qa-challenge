export type Product = {
  name: string;
  slug: string;
  size: string;
  color: string;
  unitPrice: number;
  initialQuantity: number;
  finalQuantity: number;
};

export const products = {
  cassiaFunnelSweatshirt: {
    name: "Cassia Funnel Sweatshirt",
    slug: "/product/cassia-funnel-sweatshirt/",
    size: "M",
    color: "Purple",
    unitPrice: 48,
    initialQuantity: 1,
    finalQuantity: 2,
  },
} satisfies Record<string, Product>;

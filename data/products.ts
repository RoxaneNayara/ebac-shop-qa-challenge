export type Product = {
  name: string;
  slug: string;
  size: string;
  color: string;
  unitPrice: number;
};

export const products = {
  cassiaFunnelSweatshirt: {
    name: 'Cassia Funnel Sweatshirt',
    slug: '/product/cassia-funnel-sweatshirt/',
    size: 'M',
    color: 'Orange',
    unitPrice: 48,
  },
} satisfies Record<string, Product>;
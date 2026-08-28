export type Customer = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  country: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
};

export const customers = {
  registered: {
    username: 'luna.oliveira',
    email: 'luna.oliveira@gmail.com',
    firstName: 'Luna',
    lastName: 'Oliveira',
    company: 'Hospital São Camilo Santana',
    country: 'Brasil',
    address: 'Rua Santo Anselmo, 62',
    city: 'São Paulo',
    state: 'São Paulo',
    postcode: '02362130',
    phone: '+5511998741582',
  },
} satisfies Record<string, Customer>;
export interface ProductModel {
  id: number;
  name: string;
  color: string;
  category: string;
  price: number;
  currency: string;
  img: string;
}

export const products = [
  {
    id: 1,
    name: `Apple MacBook Pro 17"`,
    color: 'Sliver',
    category: 'Laptop',
    price: 2999,
    currency: '$',
    img: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png',
  },
  {
    id: 2,
    name: 'Microsoft Surface Pro',
    color: 'White',
    category: 'Laptop Pc',
    price: 1999,
    currency: '$',
  },
  {
    id: 3,
    name: 'Magic Mouse 2',
    color: 'Black',
    category: 'Accessories',
    price: 99,
    currency: '$',
  },
  {
    id: 4,
    name: 'Rams Pro 16gb',
    color: 'none',
    category: 'Accessories',
    price: 200,
    currency: '$',
  },
  {
    id: 5,
    name: 'iPhone 15 Pro Max',
    color: 'Black',
    category: 'Phone',
    price: 1200,
    currency: '$',
  },
];

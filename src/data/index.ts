import { channel } from 'diagnostics_channel';

export interface ProductModel {
  id: number;
  name: string;
  color: string;
  category: string;
  price: number;
  currency: string;
  img: string;
}

export interface SalesModel {
  id: number;
  channel: string;
  draft: number;
  confirmed: number;
  packed: number;
  shipped: number;
  invoiced: number;
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
    color: 'blue',
    category: 'Laptop Pc',
    price: 1999,
    currency: '$',
    img: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-pro-11th-edition-sapphire-360-horizontal-poster?fmt=png-alpha&scl=1',
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

export const salesData = [
  {
    id: 1,
    channel: 'Direct Sales',
    draft: 2,
    confirmed: 32,
    packed: 42,
    shipped: 23,
    invoiced: 7,
  },
  {
    id: 2,
    channel: 'Wholesale',
    draft: 0,
    confirmed: 41,
    packed: 33,
    shipped: 11,
    invoiced: 14,
  },
  {
    id: 3,
    channel: 'Retail',
    draft: 2,
    confirmed: 12,
    packed: 25,
    shipped: 16,
    invoiced: 21,
  },
];

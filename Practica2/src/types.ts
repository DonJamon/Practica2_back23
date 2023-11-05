export type product = {
  name: string;
  stock?: string;
  description?: string;
  price: number;
};

export type client = {
  name: string;
  cif: string;
};

export type invoice = {
  client: string;
  products: product[];
  total?: number;
};
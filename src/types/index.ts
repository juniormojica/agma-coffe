export interface Coffee {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: number;
  image: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  flavor: string[];
}

export interface CartItem {
  coffee: Coffee;
  quantity: number;
}
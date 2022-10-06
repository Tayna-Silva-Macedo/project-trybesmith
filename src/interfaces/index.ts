export interface Product {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface Payload {
  id: number;
  username: string;
  classe: string;
  level: number;
}

export interface User extends Payload {
  password: string;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

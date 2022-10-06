import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: Omit<Product, 'id' | 'orderId'>): Promise<number> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return insertId;
  }
}

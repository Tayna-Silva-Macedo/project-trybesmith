import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrdersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
        FROM Trybesmith.Orders O 
        INNER JOIN Trybesmith.Products P ON O.id = P.orderId
        GROUP BY O.id`,
    );

    return orders as Order[];
  }

  async create(productsIds: number[], userId: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    productsIds.forEach(async (productId) => {
      await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [insertId, productId],
      );
    });

    return insertId;
  }
}

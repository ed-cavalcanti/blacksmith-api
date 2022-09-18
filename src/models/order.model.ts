import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `SELECT o.id AS id, o.userId AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId ASC`;

    const result = await this.connection.execute(query);

    const [rows] = result;
    const orders = rows as Order[];
    return orders;
  }
}
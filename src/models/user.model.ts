import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getById(id: number): Promise<User> {
    const query = 'SELECT * FROM Trybesmith.Users where id=?;';

    const result = await this.connection
      .execute(query, [id]);

    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }
}
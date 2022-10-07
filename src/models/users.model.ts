import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Login, User } from '../interfaces';

export default class UsersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getByUsername(username: string): Promise<User | undefined> {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );

    return user as User | undefined;
  }

  async getByUsernameAndPassword(login: Login): Promise<User | undefined> {
    const { username, password } = login;

    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return user as User | undefined;
  }

  async create(user: Omit<User, 'id'>): Promise<number> {
    const { username, classe, level, password } = user;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return insertId;
  }
}

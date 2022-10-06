import { Payload, User } from '../interfaces';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import jwt from '../shared/jwt';

export default class UsersService {
  private usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  async create(user: Omit<User, 'id'>): Promise<string> {
    const insertId = await this.usersModel.create(user);

    const payload: Payload = {
      id: insertId,
      username: user.username,
      classe: user.classe,
      level: user.level,
    };

    const token = jwt.create(payload);

    return token;
  }
}

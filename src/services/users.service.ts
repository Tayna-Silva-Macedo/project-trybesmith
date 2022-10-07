import { Login, Payload, User } from '../interfaces';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import HttpException from '../shared/HttpException';
import jwt from '../shared/jwt';
import statusCodes from '../shared/statusCodes';

export default class UsersService {
  private usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  async login(login: Login) {
    const user = await this.usersModel.getByUsernameAndPassword(login);

    if (!user) {
      throw new HttpException(
        statusCodes.UNAUTHORIZED,
        'Username or password invalid',
      );
    }

    const payload: Payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.create(payload);

    return token;
  }

  async create(user: Omit<User, 'id'>): Promise<string> {
    const usernameExists = await this.usersModel.getByUsername(user.username);

    if (usernameExists) {
      throw new HttpException(
        statusCodes.BAD_REQUEST,
        'Username already exists',
      );
    }

    const insertId = await this.usersModel.create(user);

    const payload: Payload = {
      id: insertId,
      username: user.username,
    };

    const token = jwt.create(payload);

    return token;
  }
}

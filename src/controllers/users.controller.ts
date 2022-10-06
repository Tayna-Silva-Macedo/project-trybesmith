import { Request, Response } from 'express';
import { Login, User } from '../interfaces';
import UsersService from '../services/users.service';
import statusCodes from '../shared/statusCodes';

class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  login = async (req: Request, res: Response) => {
    const login: Login = req.body;

    const token = await this.usersService.login(login);

    return res.status(statusCodes.OK).json({ token });
  };

  create = async (req: Request, res: Response) => {
    const user: Omit<User, 'id'> = req.body;

    const token = await this.usersService.create(user);

    return res.status(statusCodes.CREATED).json({ token });
  };
}

export default new UsersController();

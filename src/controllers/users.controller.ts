import { Request, Response } from 'express';
import { User } from '../interfaces';
import UsersService from '../services/users.service';
import statusCodes from '../shared/statusCodes';

class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  create = async (req: Request, res: Response) => {
    const user: Omit<User, 'id'> = req.body;

    const token = await this.usersService.create(user);

    return res.status(statusCodes.CREATED).json({ token });
  };
}

export default new UsersController();

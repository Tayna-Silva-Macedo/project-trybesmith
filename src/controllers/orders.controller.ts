import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import statusCodes from '../shared/statusCodes';

class OrdersController {
  private ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  getAll = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();

    return res.status(statusCodes.OK).json(orders);
  };
}

export default new OrdersController();

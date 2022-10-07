import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import statusCodes from '../shared/statusCodes';

class OrdersController {
  private ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();

    return res.status(statusCodes.OK).json(orders);
  };

  create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { userId } = res.locals;

    const orderCreated = await this.ordersService.create(productsIds, userId);

    return res.status(statusCodes.CREATED).json(orderCreated);
  };
}

export default new OrdersController();

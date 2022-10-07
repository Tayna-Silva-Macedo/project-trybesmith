import { Order } from '../interfaces';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import HttpException from '../shared/HttpException';
import statusCodes from '../shared/statusCodes';
import ProductsService from './products.service';

export default class OrdersService {
  private ordersModel: OrdersModel;

  private productsService: ProductsService;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
    this.productsService = new ProductsService();
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.ordersModel.getAll();

    return orders;
  }

  async create(
    productsIds: number[],
    userId: number,
  ): Promise<Omit<Order, 'id'>> {
    const productsExists = await this.productsService.productsExists(
      productsIds,
    );

    if (!productsExists) throw new HttpException(statusCodes.BAD_REQUEST, 'Products do not exist');

    await this.ordersModel.create(productsIds, userId);

    const orderCreated = {
      userId,
      productsIds,
    };

    return orderCreated;
  }
}

import { Order } from '../interfaces';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  private ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.ordersModel.getAll();

    return orders;
  }
}

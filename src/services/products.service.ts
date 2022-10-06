import ProductsModel from '../models/products.model';
import connection from '../models/connection';
import { Product } from '../interfaces';

export default class ProductsService {
  private productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  async create(
    product: Omit<Product, 'id' | 'orderId'>,
  ): Promise<Omit<Product, 'orderId'>> {
    const insertId = await this.productsModel.create(product);

    const productCreated = {
      id: insertId,
      ...product,
    };

    return productCreated;
  }
}

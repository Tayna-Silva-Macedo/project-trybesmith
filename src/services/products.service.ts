import ProductsModel from '../models/products.model';
import connection from '../models/connection';
import { Product } from '../interfaces';

export default class ProductsService {
  private productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  async productsExists(productsIds: number[]): Promise<boolean> {
    const allProducts = await this.productsModel.getAll();
    const allProductsIds = allProducts.map((product) => product.id);

    return productsIds.every((productId) => allProductsIds.includes(productId));
  }

  async getAll(): Promise<Product[]> {
    const products = await this.productsModel.getAll();

    return products;
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

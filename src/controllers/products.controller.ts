import { Request, Response } from 'express';
import { Product } from '../interfaces';
import ProductsService from '../services/products.service';
import statusCodes from '../shared/statusCodes';

class ProductsController {
  private productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();

    return res.status(statusCodes.OK).json(products);
  };

  create = async (req: Request, res: Response) => {
    const product: Omit<Product, 'id' | 'orderId'> = req.body;

    const productCreated = await this.productsService.create(product);

    return res.status(statusCodes.CREATED).json(productCreated);
  };
}

export default new ProductsController();

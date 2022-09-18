import { Request, Response } from 'express';
import ProductService from '../services/product.svc';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };
}
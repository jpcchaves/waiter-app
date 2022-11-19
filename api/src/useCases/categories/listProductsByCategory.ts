import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

export async function listProductsByCategory (req: Request, res: Response) {


  try {
    const { categoryId } = req.params;

    const products = await Product.where('category').equals(categoryId);

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({errors: 'Internal Server Error'});
  }

}

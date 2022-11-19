import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

export async function createProduct (req: Request, res: Response) {

  try {

    const imagePath = req.file?.filename;

    const {name, description, price, category, ingredients} = req.body;


    const productCreated = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).json(productCreated);

  } catch (error) {
    console.log(error);
    res.status(500).json({errors: 'Internal Server Error'});
  }

}

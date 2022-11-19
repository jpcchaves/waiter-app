import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

export async function createOrder (req: Request, res: Response) {

  try {

    const {table, products} = req.body;

    if (!table){
      return res.status(400).json({errors: 'O número da mesa é obrigatório!'});
    }

    if(!products){
      return res.status(400).json({errors: 'É preciso informar um produto.'});
    }

    const order = await Order.create({
      table, products
    });

    res.status(201).json(order);

  } catch (error) {
    console.log(error);
    res.status(500).json({errors: 'Internal Server Error'});
  }

}

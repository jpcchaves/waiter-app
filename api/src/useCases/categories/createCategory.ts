import { Request, Response } from 'express';

import { Category } from '../../app/models/Category';

import { validationResult } from 'express-validator';

export async function createCategory (req: Request, res: Response) {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {

    const {icon, name} = req.body;

    if (!icon){
      return res.status(400).json({errors: 'O ícone é obrigatório'});
    }

    if(!name){
      return res.status(400).json({errors: 'O nome é obrigatório'});
    }

    const category = await Category.create({
      icon, name
    });

    res.status(201).json(category);

  } catch (error) {
    console.log(error);
    res.status(500).json({errors: 'Internal Server Error'});
  }

}

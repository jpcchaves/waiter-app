import { body } from 'express-validator';

export const createCategoryValidation = [
  body('icon')
    .isString()
    .withMessage('O ícone é obrigatório')
    .not()
    .isEmpty()
    .withMessage('O ícone é obrigatório'),
  body('name')
    .isString()
    .withMessage('O nome é obrigatório')
    .isLength({min: 3})
    .withMessage('O nome precisa ter, no mínimo, 3 caracteres.')
];

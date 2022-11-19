import { Router } from 'express';

import path from 'path';

import multer from 'multer';

// useCases
import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { createProduct } from './useCases/products/createProducts';
import { listProducts } from './useCases/products/listProducts';

// validations
import { createCategoryValidation } from './validations/categoriesValidations/createCategoryValidation';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategoryValidation, createCategory);

// list products
router.get('/products', listProducts);

// create product
router.post('/products', upload.single('image'), createProduct);

// get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// list orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

// create orders
router.post('/orders', (req, res) => {
  res.send('ok');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});

import { Router } from 'express';
import productController from '../controllers/product.controller';
import auth from '../middlewares/auth.middleware';

const productRouter = Router();

productRouter.post('/products', auth.nameProduct, auth.priceProduct, productController.create);
productRouter.get('/products', productController.list);

export default productRouter;
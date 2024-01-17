import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const createdProduct = await ProductModel.create(product);

  if (!createdProduct) {
    return { status: 'INVALID_DATA', data: { message: 'Erro ao cadastrar' } };
  }
        
  return { status: 'SUCCESSFUL', data: createdProduct.dataValues };
}

export default {
  create,
};
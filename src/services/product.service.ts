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

async function list(): Promise<ServiceResponse<Product[]>> {
  const productsList = await ProductModel.findAll();

  if (!productsList) {
    return { status: 'INVALID_DATA', data: { message: 'Erro ao listar' } };
  }

  const productListData = productsList.map((product) => product.dataValues);

  return { status: 'SUCCESSFUL', data: productListData };
}

export default {
  create,
  list,
};
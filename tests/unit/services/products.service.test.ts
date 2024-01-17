import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productMock  from '../../mocks/product.mock';
import productService from '../../../src/services/product.service';

describe('ProductsService', function () {
  beforeEach(function () { 
    sinon.restore(); 
    it('Deve retornar com status 201 com o produto cadastrado', async function () {
      // Arrange
      const productMockReturn = ProductModel.build(productMock.validProduct);
      sinon.stub(ProductModel, 'create').resolves(productMockReturn);
  
      // Act
      const serviceResponse = await productService.create(productMock.validProduct);
  
      // Assert
      expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
      expect(serviceResponse.data).to.be.deep.equal(productMock.validProduct);
    });
    it('Deve retornar com status 400 sem o nome corretamente', async function () {
      // Arrange
      const productMockReturn = ProductModel.build(productMock.emptyNameProduct);
      sinon.stub(ProductModel, 'create').resolves(productMockReturn);
  
      // Act
      const serviceResponse = await productService.create(productMock.emptyNameProduct);
  
      // Assert
      expect(serviceResponse.status).to.be.equal('INVALID_DATA');
      expect(serviceResponse.data).to.be.deep.equal({ message: 'Nome inválido' });
    });
  });
});
import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productMock  from '../../mocks/product.mock';
import productService from '../../../src/services/product.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
// //arrange

// const productMockReturn = ProductModel.build(productMock.validProduct);
// sinon.stub(ProductModel, 'create').resolves(productMockReturn);

// //act

// const serviceResponse = productService.create(productMock.validProduct);

// //assert
// expect(serviceResponse.status).to.be.equal('SUCCESSFUL');
// expect(serviceResponse.data).to.be.equal(productMock.validProduct);
});

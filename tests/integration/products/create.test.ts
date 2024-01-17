import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
it('Deve retornar um status 201 com um produto criado', async function() {
 
  //arrange

  const mockCreateProduct = ProductModel.build(productMock.validProduct);
  sinon.stub(ProductModel, 'create').resolves(mockCreateProduct);
  
  //act

  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productMock.validProduct);

  //assert

  expect(httpResponse.status).to.be.equal(201);
  expect(httpResponse.body).to.be.deep.equal(productMock.validProduct);
})
});
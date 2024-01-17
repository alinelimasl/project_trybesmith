import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/product.mock';
import productService from '../../../src/services/product.service';
import productsController from '../../../src/controllers/product.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve salvar ao enviar dados válidos', async function () {

    //arrange
    req.body = productMock.validProduct;
    sinon.stub(productService, 'create').resolves({ status: 'SUCCESSFUL', data: productMock.validProduct });

    //act
    await productsController.create(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.validProduct);
  });

  it('deve retornar um erro se enviar um nome inválido', async function () {

    //arrange
    req.body = productMock.emptyNameProduct;
    sinon.stub(productService, 'create').resolves({ status: 'INVALID_DATA', data: { message: 'Nome inválido' } });

    //act
    await productsController.create(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Nome inválido' });

  });

  it('deve retornar um erro se enviar um preço inválido', async function () {
      
      //arrange
      req.body = productMock.invalidPriceProduct;
      sinon.stub(productService, 'create').resolves({ status: 'INVALID_DATA', data: { message: 'Preço inválido' } });
  
      //act
      await productsController.create(req, res);
  
      //assert
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: 'Preço inválido' });
  
    });

    it('deve retornar um erro se enviar um orderId inválido', async function () {
        
        //arrange
        req.body = productMock.withoutOrderIdProduct;
        sinon.stub(productService, 'create').resolves({ status: 'INVALID_DATA', data: { message: 'OrderId inválido' } });
    
        //act
        await productsController.create(req, res);
    
        //assert
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: 'OrderId inválido' });
    
      });

      it('Deve retornar todos os produtos', async function () {
        
        //arrange
        sinon.stub(productService, 'list').resolves({ status: 'SUCCESSFUL', data: [productMock.validProduct] });
        
        //act
        await productsController.list(req, res);
        
        //assert
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith([productMock.validProduct]);
      });

});

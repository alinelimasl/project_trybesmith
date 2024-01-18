import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Ao colocar usuário, deve retornar um erro', async function (){
    //arrange
    req.body = loginMock.nonExistingUser;
    sinon.stub(loginService, 'verifyLogin').resolves({ status: 'INVALID_DATA', data: { message: 'Nome inválido' } });

    //act
    await loginController.login(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Nome inválido' });
  });
  
  it('Ao colocar senha, deve retornar um erro', async function (){
    //arrange
    req.body = loginMock.nonExistingUser;
    sinon.stub(loginService, 'verifyLogin').resolves({ status: 'INVALID_DATA', data: { message: 'Nome inválido' } });

    //act
    await loginController.login(req, res);

    //assert
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Nome inválido' });
  });

}); 

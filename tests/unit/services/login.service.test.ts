import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';
import UserModel from '../../../src/database/models/user.model';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

it('Ao colocar usuário, deve retornar um erro', async function (){

  //arrage
  const parameters = loginMock.nonExistingUser;

  //act
  const serviceResponse = await loginService.verifyLogin(parameters);

  //assert
  expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });  
})

it('Ao colocar senha, deve retornar um erro', async function (){

  //arrage
  const parameters = loginMock.nonExistingUser;

  //act
  const serviceResponse = await loginService.verifyLogin(parameters);

  //assert
  expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });  
})

it('Ao colocar usuário e senha errados, deve retornar um erro', async function (){
  //arrage
  const parameters = loginMock.nonExistingUser;

  //act
  const serviceResponse = await loginService.verifyLogin(parameters);

  //assert
  expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });  

});
});

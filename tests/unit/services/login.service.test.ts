import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';
import UserModel from '../../../src/database/models/user.model';
import { afterEach } from 'mocha';
import jwt from 'jsonwebtoken';



describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

it('Ao colocar usuário errado, deve retornar um erro', async function (){

  //arrage
  const parameters = loginMock.nonExistingUser;

  //act
  const serviceResponse = await loginService.verifyLogin(parameters);

  //assert
  expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });  
})

it('Ao colocar senha errada, deve retornar um erro', async function (){

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

it('Deve retornar status 200 com credenciais válidas', async function () {
  // arrange
  const parameters = {
   username: 'alguem',
    password: '123',
  };

  sinon.stub(UserModel, 'findOne').resolves(UserModel.build({
    id: 1,
   username: 'alguem',
   password: '$2a$10$5sOEf.pxQxU3RA84va6CduLHmLqji150FGXUnwfHq7HO3dtvnN10K',
   vocation: '',
   level: '1',
  }));

  // act
  const serviceResponse = await loginService.verifyLogin(parameters);

  // assert
  expect(serviceResponse.status).to.equal('SUCCESSFUL');
  expect(serviceResponse.data).to.have.property('token');
});

});

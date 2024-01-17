import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginService from '../../../src/services/login.service';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); 
  it('Ao colocar usuário, deve retornar um erro', async function (){
    //arrange
    const parameters = loginMock.nonExistingUser;

    //act
    const serviceResponse = await loginService.verifyLogin(parameters);

    //assert
    expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });  
  })
  it ('Ao colocar senha, deve retornar um erro', async function (){
    //arrange
    const parameters = loginMock.nonExistingUser;

    //act
    const serviceResponse = await loginService.verifyLogin(parameters);

    //assert
    expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: "\"username\" and \"password\" are required" });  
  });
});

});

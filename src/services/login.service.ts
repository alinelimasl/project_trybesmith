import bcrypt from 'bcryptjs';
import jwUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  const userFound = await UserModel.findOne({ where: { username: login.username } });

  if (!userFound || !bcrypt.compareSync(login.password, userFound.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { id, username } = userFound.dataValues;
  const token = jwUtil.sign({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
}
export default {
  verifyLogin,
};
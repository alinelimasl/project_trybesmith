// import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
// import { ServiceResponse } from '../types/ServiceResponse';

// async function getAllOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
//   const orderList = await OrderModel.findAll();

//   if (!orderList) {
//     return { status: 'INVALID_DATA', data: { message: 'Erro ao listar' } };
//   }
//   return { status: 'SUCCESSFUL', data: orderList };
// }

// export default {
//   getAllOrders,
// };
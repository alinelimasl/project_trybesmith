// import { Request, Response } from 'express';
// import orderService from '../services/order.service';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

// async function getAllOrders(_req: Request, res: Response) {
//   const serviceResponse = await orderService.getAllOrders();

//   if (serviceResponse.status !== 'SUCCESSFUL') {
//     return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
//   }
        
//   return res.status(200).json(serviceResponse.data);
// }

// export default {
//   getAllOrders,
// };
import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

export async function changeOrderStatus (req: Request, res: Response) {

  try {

    const { orderId } = req.params;
    const { status } = req.body;

    const validStatus = ['WAITING', 'IN_PRODUCTION', 'DONE'];

    if (!validStatus.includes(status)) {
      return res.status(400).json({errors: 'O status informado não é válido!'});
    }

    await Order.findByIdAndUpdate(orderId, {status});

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({errors: 'Internal Server Error'});
  }

}

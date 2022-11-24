import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';

import { OrdersSectionContainer } from './styles';

const Orders = () => {

  const orders: Order[] = [
    {
      '_id': '6379126356ba4b43c5305b5e',
      'table': '123',
      'status': 'WAITING',
      'products': [
        {
          'product': {
            'name': 'Coca Geladinha',
            'imagePath': '1668878056720-coca-cola.png',
            'price': 40
          },
          'quantity': 2,
          '_id': '63790ee8635ea15f9f1b5612'
        },
        {
          'product': {
            'name': 'Coca Geladinha',
            'imagePath': '1668878056720-coca-cola.png',
            'price': 40
          },
          'quantity': 2,
          '_id': '63790ee8635ea15f9f1b5612'
        },
        {
          'product': {
            'name': 'Coca Geladinha',
            'imagePath': '1668878056720-coca-cola.png',
            'price': 40
          },
          'quantity': 2,
          '_id': '63790ee8635ea15f9f1b5612'
        },
        {
          'product': {
            'name': 'Coca Geladinha',
            'imagePath': '1668878056720-coca-cola.png',
            'price': 40
          },
          'quantity': 2,
          '_id': '63790ee8635ea15f9f1b5612'
        },

      ],
    }
  ];


  return (
    <OrdersSectionContainer>
      <OrdersBoard icon='🕒' title='Fila de Espera' orders={orders}/>
      <OrdersBoard icon='👨‍🍳' title='Em preparação'/>
      <OrdersBoard icon='✔️' title='Finalizado' />
    </OrdersSectionContainer>
  );
};

export default Orders;


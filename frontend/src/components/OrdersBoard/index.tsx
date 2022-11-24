import { useState } from 'react';
import { Order } from '../../types/Order';
import OrderModal from '../OrderModal';
import { Board, OrdersCotainer } from './styles';

interface OrdersBoardProps {
	icon: string;
	title: string;
	orders?: Order[]
}

const OrdersBoard = ({icon, title, orders}: OrdersBoardProps) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  const handleOpenModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <Board>

      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>



      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders?.length ? orders.length : 0})</span>
      </header>

      {orders?.length && <OrdersCotainer>

        {orders?.map(order => (
          <>
            <button onClick={() => {
              handleOpenModal(order);
            }}>
              <strong>{order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          </>))}

      </OrdersCotainer>

      }
    </Board>
  );
};

export default OrdersBoard;

import logo from '../../assets/images/logo.svg';

import { ContentContainer, HeaderContainer } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <div className='page-details'>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="logotipo do aplicativo WaiterApp" />
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;

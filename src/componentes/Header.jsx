import Logo from '../componentes/Logo';
import Menu from '../componentes/Menu';
import IconesHeader from '../componentes/IconesHeader';
import './Header.css';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    align-items: center;
` 

export default function Header() {
  return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <IconesHeader />
        </HeaderContainer>
  )
}

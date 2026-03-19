import Logo from '../componentes/Logo';
import Menu from '../componentes/Menu';
import IconesHeader from '../componentes/IconesHeader';
import './Header.css';

export default function Header() {
  return (
        <header className="App-header">
            <Logo />
            <Menu />
            <IconesHeader />
        </header>
  )
}

import perfil from '../img/perfil.svg';
import sacola from '../img/sacola.svg';
import './IconesHeader.css';

export default function IconesHeader() {

    const icones = [perfil, sacola];

  return (
            <ul className='icones'>
                {icones.map((icone) => (
                <li className='icone'><img src={icone} alt="icone" /></li>
                ))}
             </ul>
  )
}

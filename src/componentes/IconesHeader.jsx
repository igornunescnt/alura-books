import perfil from '../img/perfil.svg';
import sacola from '../img/sacola.svg';
import styled from 'styled-components';

const IconesContainer = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: end;
    width: 50%;
`;
const Icone = styled.li`
    display: flex;
`;

export default function IconesHeader() {

    const icones = [perfil, sacola];

  return (
            <IconesContainer>
                {icones.map((icone) => (
                <Icone><img src={icone} alt="icone" /></Icone>
                ))}
             </IconesContainer>
  )
}

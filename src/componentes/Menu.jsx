
import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
    width: 30%;
    height: 100%;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

const Opcao = styled.li`
    font-size: 20px;
    color: #002d52;
`;

export default function Menu() {

  const opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

  return (
    <Opcoes>
          {opcoes.map((texto) => (
            <Opcao>{texto}</Opcao>
          ))}
    </Opcoes>
  )
}

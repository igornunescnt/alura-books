import './Menu.css';



export default function Menu() {

  const opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

  return (
    <ul className='opcoes'>
          {opcoes.map((texto) => (
            <li className='opcao'>{texto}</li>
          ))}
    </ul>
  )
}

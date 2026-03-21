import CardRecomenda from "./CardRecomenda"
import { livros } from "./DadosUltimosLancamentos"
import { Titulo } from "./Titulo"
import styled from "styled-components"
import imagem from "../img/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const Recomendacao = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    flex-wrap: wrap;
`

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00">Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <Recomendacao>
                <CardRecomenda 
                    titulo="Talvez você se interesse por..."
                    subtitulo="Angular 11"
                    descricao="Construindo uma aplicação com Angular 11, aprendendo os conceitos básicos do framework e suas principais funcionalidades."
                    imagem={imagem}
                />
                <CardRecomenda 
                    titulo="Talvez você se interesse por..."
                    subtitulo="Angular 11"
                    descricao="Construindo uma aplicação com Angular 11, aprendendo os conceitos básicos do framework e suas principais funcionalidades."
                    imagem={imagem}
                />
                <CardRecomenda 
                    titulo="Talvez você se interesse por..."
                    subtitulo="Angular 11"
                    descricao="Construindo uma aplicação com Angular 11, aprendendo os conceitos básicos do framework e suas principais funcionalidades."
                    imagem={imagem}
                />
            </Recomendacao>
    </UltimosLancamentosContainer>
  )
}

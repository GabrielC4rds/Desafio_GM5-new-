import React from "react";
import styled from "styled-components";
let json = require('../../assets/servico.json');

const Main = styled.div`
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    @media (max-width: 900px) {
      height: 500vh;
      width: 85%;
      align-self: center;
    }

`;

const Title = styled.div`
    height: 20%;
    width: 100%;
    P{
      font-size: 30px;
      font-weight: 900;
      font-family: 'Montserrat';
      color: #282828;
    }
    @media (max-width: 900px) {
      height: 10%;

    }
`;

const Blocks = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 750px) {
      flex-direction: column;
      height: 500vh;
    }
`;

const Block = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
  @media(max-width: 375px) {
    height: 60vh;
  }
`;

const PhotoBlock = styled.img`
  width: 70%;
  height: 50%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: 30vh;
  }
`;

const BlockTexts = styled.div`
    width: 100%;
    height: 50%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;

    p:nth-child(1){
      margin: 1px 0;
      font-size: 15px;
      font-family: Montserrat;
      font-weight: bold;

    }
    p:nth-child(2){
      margin: 1px 0;

      font-size: 12px;
    }
    p:nth-child(3){
      margin: 1px 0;
      font-size: 10px;
      text-align: justify;
      text-justify: auto;
      font-weight: bold;
      font-family: Montserrat;
    }
    @media (max-width: 900px) {
      align-items: center;
      height: 20vh;

      p:nth-child(3){
        text-align: justify;
        text-align-last: center;
        font-family: Montserrat;
      }
    }
`;

export default function index() {

  return (
    <Main>
      <Title>
        <p>NOSSOS SERVIÇOS</p>
      </Title>
      <Blocks>
        {json.Servico.map(res => {
          return (
            <Block>
              <PhotoBlock src={`./static/img/${res.Imagem}`}/>
              <BlockTexts >
                <p>{res.Titulo}</p>
                <p>{res.Subtitulo}</p>
                <p>
                  {res.Descricao}
                </p>
              </BlockTexts>
            </Block>
          )
        })
        }
      </Blocks>
    </Main>
  )

}
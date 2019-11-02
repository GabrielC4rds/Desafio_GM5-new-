import React from "react";
import styled from "styled-components";

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
    @media (max-width: 900px) {
      flex-direction: column;
      height: 500vh;
    }
`;

const Block1 = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PhotoBlock1 = styled.div`
  background: #592f83;
  width: 70%;
  height: 50%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: 30vh;
  }
`;

const PhotoBlock2 = styled.div`
  background: #f5a400;  
  width: 70%;
  height: 50%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    height: 30vh;

  }
`;

const PhotoBlock3 = styled.div`
  background: #ec6534;
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

    p1{
      margin: 1px 0;
      font-size: 15px;
    }
    p2{
      margin: 1px 0;

      font-size: 12px;
    }
    p3{
      margin: 1px 0;
      font-size: 10px;
      text-align: justify;
      text-justify: auto;
    }
    @media (max-width: 900px) {
      align-items: center;
      height: 20vh;

      p3{
        text-align: justify;
        text-align-last: center;
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
        <Block1>
          <PhotoBlock1 />
          <BlockTexts>
            <p1>SITES</p1>
            <p2>Lorem ipsum dolor sit amet</p2>
            <p3>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p3>
          </BlockTexts>
        </Block1>
        <Block1>
           <PhotoBlock2 />
            <BlockTexts>
            <p1>APPS</p1>
            <p2>Lorem ipsum dolor sit amet</p2>
            <p3>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p3>
            </BlockTexts>
        </Block1>
        <Block1>
          <PhotoBlock3 />
          <BlockTexts>
            <p1>MKT DIGITAL</p1>
            <p2>Lorem ipsum dolor sit amet</p2>
            <p3>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p3>
          </BlockTexts>
        </Block1> 
        
      </Blocks>
    </Main>
  )
}
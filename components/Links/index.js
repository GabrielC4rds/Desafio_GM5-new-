import React from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 100%;
  width: 20%;
  padding: 0 20px;
  @media (max-width: 900px) {
    width: 85%;
    height: 100vh;
    flex-direction: column;
    display: flex;
    align-self: center;
    padding: 0 0;
  }
  @media (max-width: 375px){
    height: 120vh;
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
    height: 20%;
  }
`;

const List = styled.div`
  height: 70%;
  width: 100%;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 100%;

  }
`;

const Item = styled.div`
  border-bottom: 1px solid #939393;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 25%;
  width: 100%;
  cursor: pointer;
  transition .5s ease;
   : hover{
    transform: scale(1.1);
  }
  p1{
      font-size: 23px;
      color: #0199b0;
      font-weight: bold;
      font-family: Montserrat;
      font-weight: bold;
  }  
  p2{
      font-size: 12px;
      color: #282828;
      margin-top: 5px;
      margin-left: 5px;
      font-family: Montserrat;
  } 
  @media (max-width: 900px) {
    padding: 0 20px;
    height: 20%;
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export default function index() {
    return (
        <Main>
            <Title><p>LINKS</p></Title>
            <List>
                <Item>
                    <p1>1.</p1>
                    <p2>Lorem ipsum dolor sit amet</p2>
                </Item>
                <Item>
                    <p1>2.</p1>
                    <p2>Lorem ipsum dolor sit amet</p2>
                </Item>
                <Item>
                    <p1>3.</p1>
                    <p2>Lorem ipsum dolor sit amet</p2>
                </Item>
                <Item>
                    <p1>4.</p1>
                    <p2>Lorem ipsum dolor sit amet</p2>
                </Item>
            </List>
        </Main>
    )
}
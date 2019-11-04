import React from "react";
import styled from "styled-components";

const MainFooterHolder = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  width: 100%;
  padding: 15px 0;
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border-top: 2px solid #0199b0;
  @media (max-width: 750px) {
    flex-wrap: wrap;
    max-width: 1000px;
    align-items: center;
    justify-content: center;
  }
`;

const MainColumn = styled.div`
  width: 20%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a{
      color: #282828;
      margin: 5px 0;
      font-family: Montserrat;
      font-weight: bold;
    }
    a:nth-child(1){
      cursor: pointer;
      color: #775a97;
      margin: 5px 0;
      font-family: Montserrat;
      font-weight: bold;
    }
    a:nth-child(3){
      color: #775a97;
      margin: 5px 0;
      font-family: Montserrat;
      font-weight: bold;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
const MainColumnMobile = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: flex;
    width: 100%;
    height: 40vh;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    text-align: center;
    justify-content: space-around;
    ul{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items:  center;
      a{
        color: #282828;
        margin: 5px 0;
        font-family: Montserrat;
        font-weight: bold;
      }
      a:nth-child(1){
        color: #775a97;
        margin: 5px 0;
        font-family: Montserrat;
        font-weight: bold;
      }
      a:nth-child(3){
        color: #775a97;
        margin: 5px 0;
        font-family: Montserrat;
        font-weight: bold;
      }
      
    }
  }
`;

const SocialIcons = styled.div`
  width: 60%;
  height: 5vh;
  margin-bottom: 5vh;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  flex-direction: row;
  img{

    transition .5s ease;
     : hover{
      transform: scale(1.1);
    }
  }
  @media (max-width: 750px) {
    padding-left: 40px;
    margin: 0 0;
  }
`;


export default function MainFooter() {
  return (
    <div>
      <MainFooterHolder>
        <FooterContent>
          <MainColumn>
            <ul>
              <a>
                home
              </a>
              <a>
                quem somos
              </a>
              <a>
                serviços
              </a>
              <a>
                contato
              </a>
            </ul>
          </MainColumn>
          <MainColumn>
            <ul>
              <a>
                endereço
              </a>
              <a>
                nullam lacinia justo sit amet quam porta tempor
              </a>
              <a>
                contato
              </a>
              <a>
                contato@gm5.com.br
              </a>
            </ul>
          </MainColumn>
          <MainColumn>
            <ul>
              <a>redes sociais</a>
            </ul>
            <SocialIcons>
              <a>
                <img src="./static/img/facebook_icon.png"/>
              </a>
              <a>
                <img src="./static/img/instagram_icon.png"/>
              </a>
              <a>
                <img src="./static/img/twitter_icon.png"/>
              </a>
              <a>
                <img src="./static/img/linkedin_icon.png"/>
              </a>
              </SocialIcons>
              <ul>
              <a>copyright 2019 - gm5 tecnologia</a>
              </ul>
          </MainColumn>
          <MainColumnMobile>
          <ul>
              <a>
                endereço
              </a>
              <a>
                nullam lacinia justo sit amet quam porta tempor
              </a>
              <a>
                contato
              </a>
              <a>
                contato@gm5.com.br
              </a>
              <a>
                redes sociais
              </a>
            </ul>
            <SocialIcons>
              <a>
                <img src="./static/img/facebook_icon.png"/>
              </a>
              <a>
                <img src="./static/img/instagram_icon.png"/>
              </a>
              <a>
                <img src="./static/img/twitter_icon.png"/>
              </a>
              <a>
                <img src="./static/img/linkedin_icon.png"/>
              </a>
              </SocialIcons>
              <ul>
              <a>copyright 2019 - gm5 tecnologia</a>
              </ul>
          </MainColumnMobile>
        </FooterContent>
      </MainFooterHolder>
    </div>
  );
}

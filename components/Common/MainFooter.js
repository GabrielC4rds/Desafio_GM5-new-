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
    }
    a1{
      color: purple;
      margin: 5px 0;
    }
  }
`;

const SocialIcons = styled.div`
  width: 50%;
  height: 5vh;
  display: flex;
  margin: 0 35px;
  justify-content: space-around;
  align-items: center;

  flex-direction: row;

`;


export default function MainFooter() {
  return (
    <div>
      <MainFooterHolder>
        <FooterContent>
          <MainColumn>
            <ul>
              <a1>
                home
              </a1>
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
              <a1>
                endereço
              </a1>
              <a>
                asdasfjiasjfoa wdoasfoaska asfalsfka
              </a>
              <a1>
                contato
              </a1>
              <a>
                safjasjf skflakfkasçf falasff
              </a>
            </ul>
          </MainColumn>
          <MainColumn>
            <ul>
              <a1>redes sociais</a1>
            </ul>
            <SocialIcons>
              <a>
                <img src="./static/myfolder/img/facebook_icon.png"/>
              </a>
              <a>
                <img src="./static/myfolder/img/instagram_icon.png"/>
              </a>
              <a>
                <img src="./static/myfolder/img/twitter_icon.png"/>
              </a>
              <a>
                <img src="./static/myfolder/img/linkedin_icon.png"/>
              </a>
              </SocialIcons>
              <ul>
              <a>copyright 2019 - gm5 tecnologia</a>
              </ul>
          </MainColumn>
        </FooterContent>
      </MainFooterHolder>
    </div>
  );
}

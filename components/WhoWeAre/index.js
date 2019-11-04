import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 75vh;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    height: 60vh;
  }
  @media (max-width: 500px){
    height: 110vh;
  }
`;

const PhotoDiv = styled.img`
  width: 40%;
  height: 60%;
  @media (max-width: 900px) {
    align-self: center;
    height: 20vh;
    width: 85%;
  }
`;

const DescriptionDiv = styled.div`
  width: 35%;
  height: 80%;
  padding: 25px 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  ul{
    display: flex;
    flex-direction: column;

    p{
      font-size: 30px;
      font-weight: 900;
      font-family: 'Montserrat';
      color: #282828;
    }
    li2{
      text-align: justify;
      text-justify: auto;
    }
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;



export default function index() {
    return (
        <Main>
          <PhotoDiv src="./static/img/quem-somos.png"/>
          <DescriptionDiv>
            <ul>
              <p>Quem Somos</p>
              <li2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia justo sit amet quam porta tempor. Etiam eros sem, mollis eget risus eget, viverra gravida orci. Sed non arcu id nulla fringilla ultricies. Ut aliquet convallis cursus. Pellentesque tincidunt, libero ut volutpat gravida, tellus velit porta lacus, vitae pellentesque urna erat ac eros. In quis ante fermentum, ullamcorper velit ut, viverra risus. Cras volutpat justo tellus, in convallis augue sodales at. Cras varius semper metus laoreet aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus luctus convallis metus. Cras et elit eu diam rutrum iaculis. Morbi malesuada efficitur justo a tincidunt.
              </li2>
            </ul>
          </DescriptionDiv>
        </Main>
    );
}
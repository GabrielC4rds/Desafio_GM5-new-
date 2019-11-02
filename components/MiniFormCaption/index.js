import React from "react";
import styled from "styled-components";
import Caption from "./Caption";

const FormContainer = styled.div`
  padding: 0 10vw;
  @media (max-width: 1100px) {
    padding: 0 3vw;
  }
`;

const FormWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000029;
  border-radius: 39px;
  padding: 30px;
  h4 {
    font-weight: normal;
    text-align: center;
    font-size: 17px;
  }
`;

const CaptionWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 87%;
  .ant-input-affix-wrapper .ant-input {
    border-radius: 45px;
  }
  .ant-form-item{
    margin-bottom: 10px;
  }
`;

export default function index() {
  return (
    <FormContainer>
      <FormWrapper>
        <h4>
          Quer ter <b>acesso gratuito</b> a algumas aulas dos nossos
          <b> Cursos Extensivos R1 2020?</b> Basta preencher seus dados e acessar
          nossa plataforma com um super Minicurso!
        </h4>
        <CaptionWrapper>
          <Caption />
        </CaptionWrapper>
      </FormWrapper>
    </FormContainer>
  );
}

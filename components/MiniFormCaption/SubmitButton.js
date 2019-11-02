import React, { useState } from "react";
import styled from "styled-components";

const SubmitStyle = styled.div`
  background: #0e996d 0% 0% no-repeat padding-box;
  box-shadow: 0px 9px 25px #0e996d40;
  border-radius: 29px;
  padding: 7px 25px;
  width: fit-content;
  margin: 0 auto;
  color: #fff;
  margin-top: 25px;
  font-size: 17px;
  transform: scale(1);
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px #0e996d80;
    transform: scale(1.04);
  }
`;

export default function SubmitButton({ content }) {

  return (
    <SubmitStyle>
      {content}
    </SubmitStyle>
  );
}

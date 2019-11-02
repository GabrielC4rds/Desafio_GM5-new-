import React from "react";
import styled from "styled-components";

const Main = styled.img`
    width:100%;
    height: auto;
    background: no-repeat;
`;

export default function index() {
    return (
        <Main src="./static/img/Banner.png"></Main>
    );
}
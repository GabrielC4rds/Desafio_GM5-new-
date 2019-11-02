import React from "react";
import styled from "styled-components";
import OurServices from "../OurServices";
import Links from "../Links";


const Main = styled.div`
	width: 100%;
	height: 60vh;
	display: flex;
	justify-content: center;
	@media (max-width: 750px) {
		width: 100%;
		height: 200vh;
		flex-direction: column;
	}
`;

export default function index() {
    return (
        <Main>
					<OurServices/>
					<Links/>
        </Main>
    );
}
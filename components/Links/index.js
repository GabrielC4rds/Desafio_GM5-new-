import React from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 100%;
    width: 20%;
    padding: 0 20px;
`;

const Title = styled.div`
    height: 20%;
    width: 100%;
    P{
        font-size: 30px;
    }
`;

const List = styled.div`
    height: 70%;
    width: 100%;
`;

const Item = styled.div`
    border-bottom: 1px solid #939393;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 25%;
    width: 100%;
    
        p1{
            font-size: 23px;
            color: #0199b0;
            font-weight: bold;
        }  
        p2{
            font-size: 12px;
            color: #282828;
            margin-top: 5px;
            margin-left: 5px;
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
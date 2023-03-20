import styled from "styled-components"
import React from "react";
import Top from "./Top";
import MenuBottom from "./MenuBottom";


export default function HabitScreen(){
    
    return (
        <Div>
            <Top />
            <Body>
            
            </Body>
            <MenuBottom />
        </Div>
    )
}

const Div = styled.div`
    background-color: #e5e5e5;
    /* margin: 80px auto 70px auto; */
    margin: 80px 0 70px 0;
    width: 375px;
`
const Body = styled.div`
    margin: 28px 17px 28px 18px;
    height: 597px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #666666;
    font-size: 18px;
`

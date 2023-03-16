import React from "react";
import styled from "styled-components"

export default function Top() {
    return (
        <Div>
            <TopBar>
                <div data-test="header"h>
                    <p>TrackIt</p>
                    <img scr="https://www.shutterstock.com/image-vector/vector-line-icon-img-260nw-2050481222.jpg" alt="img perfil"></img>
                </div>
            </TopBar>
        </Div >
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 375px;
    z-index: 1;
`

const TopBar = styled.div`
    width: 100%;
    height: 80px;
    background-color: #126BA5;
    p {
        font-family: 'playball';
        color: #ffffff;
        font-weight: 400;
        font-size: 39px;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 98px;
        background-color: blueviolet;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 18px 10px 18px;
    }
`
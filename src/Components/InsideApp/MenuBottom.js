import styled from "styled-components"
import React from "react";
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MenuBottom() {

    const percentage = 30;

    return (
        <MenuB data-test="menu">
            <div data-test="today-link">
                <Circle>
                    <CircularProgressbar value={percentage} text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Circle>
            </div>
            <DivBottom>
                <div data-test="habit-link history-link">
                    <StyledLink to="/habitos">Hábitos</StyledLink>
                    <StyledLink to="/historico">Histórico</StyledLink>
                </div>
            </DivBottom>
        </MenuB>
    )
}

const Circle = styled.div`
    width: 91px;
    position:fixed;
    bottom: 0;
    left: 138px;
    z-index:2;
`
const DivBottom = styled.div`
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 375px;    
    color: #52B6FF;
    font-size: 18px;
    display: flex;
    div{
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
`
const StyledLink = styled(Link)`
    color: #52B6FF;
`
const MenuB = styled.div`
    background-color: yellow;
    /* color: green; */
    margin: 80px auto 70px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
`
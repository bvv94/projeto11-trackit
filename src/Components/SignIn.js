import logo from "../assets/Logo.png"
import styled from "styled-components"
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function signin(e) {

        const body = { email, name, image, password }

        console.log(email, name, image, password)
        e.preventDefault();
        setDisabled(true);
        alert("Cadastrando")

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)

        promise.then((res) => {
            console.log(res)
            navigate("/")
        })
        promise.catch((err) => {
            alert(err.response.statusText)
            setDisabled(false)
        })
    }

    return (
        <Div>
            <Logo>
                <img src={logo} alt='Track It' />
            </Logo>
            <Inputs>
                <form onSubmit={signin}>
                    <div>
                        <input data-test="email-input" vname="email" type="email" placeholder="email" required
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input data-test="password-input" name="password" type="password" placeholder="senha" required
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input data-test="user-name-input" name="name" type="text" placeholder="nome" required
                            value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <input data-test="user-image-input" name="image" type="url" placeholder="foto" required
                            value={image} onChange={e => setImage(e.target.value)} />
                    </div>
                    <div data-test="signup-btn">
                        <Button disabled={disabled} type="submit">Cadastrar</Button>
                    </div>
                    <div data-test="login-link">
                        <Tosignin to="/">Já tem uma conta? Faça login!</Tosignin>
                    </div>
                </form>
            </Inputs>

        </Div>
    )
}

const Div = styled.div`
margin-top: 70px;
display: flex;
flex-direction: column;
`

const Logo = styled.div`
width:178px;
height: 180px;
margin: auto;
`
const Inputs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
div{
    display: flex;
    justify-content: center;
    margin: 6px 0 6px 0;
}
input{
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    height: 45px;
    width: 303px;
    
    ::placeholder{
        font-family: 'lexend deca';
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB
    }
}
`
const Tosignin = styled(Link)`
margin-top: 46px;
font-family: 'lexend deca';
font-weight: 400;
font-size: 14px;
`
const Button = styled.button`
    height: 45px;
    width: 303px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    :hover{
        cursor: pointer;
    }
`
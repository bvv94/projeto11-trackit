import logo from "../assets/Logo.png"
import styled from "styled-components"
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "./Context/Context";

export default function LogIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    // const [user, setUser] = useContext(Context);
    const [user, setUser] = useState("");

    function login(e) {

        const body = { email, password };

        e.preventDefault();
        setDisabled(true)
        console.log(user)
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        promise.then((res) => {
            console.log(res)
            console.log(res.data.name)
            setUser(res.data.name)
            console.log(user)
            navigate('/hoje')
        })
        promise.catch((err) => {
            setDisabled(false)
            alert(err.response.statusText)
        })

    }

    return (
        <Div>
            <Logo>
                <img src={logo} alt='Track It' />
            </Logo>
            <Inputs>
                <form onSubmit={login}>
                    <div>
                        <input data-test="email-input" disabled={disabled} name="email" type="email" placeholder="email" required
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input data-test="password-input" disabled={disabled} name="senha" type="password" placeholder="senha" required
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button data-test="login-btn" disabled={disabled} type="submit">Entrar</button>
                    <div data-test="signup-link">
                        <Tosignin to="/cadastro">Não tem uma conta? Cadastre-se!</Tosignin>
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
            font-size: 20px;
            color: #DBDBDB
        }
    }
    button{
        height: 45px;
        width: 303px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;        
        font-size: 21px;
    }
`
const Tosignin = styled(Link)`
    margin-top: 46px;
    font-size: 14px;
`
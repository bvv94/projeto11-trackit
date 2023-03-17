import logo from "../assets/Logo.png"
import styled from "styled-components"
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Components/Context/Context"
import APIAuth from "../API's/APIAuth";
import { ThreeDots } from "react-loader-spinner"

export default function LogIn() {

    const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const { user, setUser } = useContext(Context);
    // const [user, setUser] = useState([]);

    function login(e) {

        e.preventDefault();
        setLoading(true)
        console.log(user)

        APIAuth.login(data)
            .then((res) => {
                console.log(res.data)
                const { id, name, image, token } = res.data
                setUser({ id, name, image, token })
                console.log(user)
                navigate('/hoje')
            })
            .catch((err) => {
                setLoading(false)
                alert(err.response.data.message)
            })
    }

    function inputData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <Div>
            <Logo>
                <img src={logo} alt='Track It' />
            </Logo>
            <Inputs>
                <form onSubmit={login}>
                    <div>
                        <input data-test="email-input" disabled={loading} name="email" type="email" placeholder="email" required
                            value={data.email} onChange={inputData} />
                    </div>
                    <div>
                        <input data-test="password-input" disabled={loading} name="password" type="password" placeholder="senha" required
                            value={data.password} onChange={inputData} />
                    </div>
                    <button data-test="login-btn" disabled={loading} type="submit">
                        {loading ? (<ThreeDots width={50} height={50} color="#FFFFFF" />) : ("Entrar")}
                    </button>
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
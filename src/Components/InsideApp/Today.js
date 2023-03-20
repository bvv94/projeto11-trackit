import Top from "./Top"
import React, { useContext, useEffect} from "react";
import MenuBottom from "./MenuBottom"
import styled from "styled-components"
import { useState } from "react"
import bin from "../../assets/Vector.png"
import Newhabit from "./HabitScreen";
import { CircularContext } from "../Context/CircularContext";
import { Context } from "../Context/Context";
import APIToday from "../../API's/APIToday";

export default function Today() {

    const empty = "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
    // const [habit, setHabit] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!");
    const [habit, setHabit] = useState([]);
    const [loading, setLoading] = useState(true)
    const {user} = useContext(Context)
    const {counter, setCounter} = useContext(CircularContext);
    // const [add, setAdd] = useState(false)
    const week = [
        { day: 'D', number: 7 },
        { day: 'S', number: 1 },
        { day: 'T', number: 2 },
        { day: 'Q', number: 3 },
        { day: 'Q', number: 4 },
        { day: 'S', number: 5 },
        { day: 'S', number: 6 }
    ]

    useEffect (addhabit, [])

    function addhabit() {
        console.log("Adicionando o hábito")        
        APIToday.getToday(user.token)
            .then( res => {
                setLoading(false)
                const apiHabit = res.data;
                setHabit(apiHabit)

                const habitsDone = apiHabit.filter (h=> h.done === true)

                const perc = ((habitsDone.lenght / apiHabit.lenght)*100).toFixed(0)
                setCounter(perc)
            })
            .catch(err => {
                setLoading(false)
                if (!user.token) {
                    alert("Faça login")
                } else {
                    alert(err.response.data.message)
                }

            })
        
        return (
            <>
                <div>
                    <input>teste</input>
                    <input type="date"></input>
                </div>
            </>
        )
    }

    return (
        <Div>
            <Top />
            <Body>
                <Title>
                    <p>Meus hábitos</p>
                    <button data-test="habit-create-btn">+</button>
                </Title>
                {/* {add && addhabit()} */}
                <div data-test="habit-create-container">
                    <Divnewhabit>
                        <input data-test="habit-name-input" placeholder="nome do hábito" type="text"
                            value={habit} onChange={e => setHabit(e.target.value)}
                        >
                        </input>
                        <div data-test="habit-day">
                            <Divmap>
                                {week.map(day => <Days key={day.number}>{day.day}</Days>)}
                            </Divmap>
                        </div>
                        <Divbuttons>
                            <div data-test="habit-create-cancel-btn habit-create-save-btn">
                                <Cancelar>Cancelar</Cancelar>
                                <Salvar type="submit">Salvar</Salvar>
                            </div>
                        </Divbuttons>
                    </Divnewhabit>
                </div>
                <Habits>
                    {empty}
                </Habits>
                <AddedHabits>
                    {/* Inicio Cartão de Hábito */}
                    <Divaddedhabit>
                        <Habit>
                            <p>Habito Informado</p>
                            <img src={bin} /> 
                        </Habit>


                        <div data-test="habit-day">
                            <Divmap>
                                {week.map(day => <Days key={day.number} onClick={()=>{}}>
                                                    {day.day}</Days>)}
                            </Divmap>
                        </div>
                    </Divaddedhabit>
                </AddedHabits>
            </Body>
            <MenuBottom />
        </Div>
    )
}

const Habit = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const Cancelar = styled.button`
    width:84px;
    height: 35px;
    margin-right: 23px;
    background-color: #FFFFFF;
    border: none;
    font-size: 16px;
    color: #52B6FF;
`
const Salvar = styled.button`
    width:84px; 
    height: 35px;
    background-color: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 5px;
    font-size: 16px;
    color: white;
`
const Divnewhabit = styled.form`
    padding: 18px 18px 18px 18px;
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{        
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        width: 303px;
        margin-bottom: 10px;
        font-family: 'Lexend Deca';
        font-size: 20px;
        
        ::placeholder{
            font-size: 20px;
            color: #DBDBDB;
            font-family: 'Lexend Deca';
            font-size: 20px;
        }
    }
`
const Divaddedhabit = styled.form`
    padding: 18px 18px 18px 18px;
    width: 340px;
    height: 91px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;

    img{
        position: relative;
        z-index: 1;
        left: 75%;
        top: -50%;
        height: 15px;
        width: 13px;
    }
`
const Divmap = styled.div`
    margin-bottom: 29px;
`
const Days = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #DBDBDB;
    
`
const Divbuttons = styled.div`
    width: 303px;
    display:flex;
    justify-content: flex-end;
`
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
const Title = styled.div`
    display: flex;
    margin: 28px 0 28px 0;
    justify-content: space-between;
    p{
        font-size: 23px;
        color: #126BA5;
    }
    button{
        color: #FFFFFF;
        font-size: 27px;
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        :hover{
        cursor: pointer;
        }
    }
`
const Habits = styled.div`
    margin-top: 15px;
    
`
const AddedHabits = styled.div`

`
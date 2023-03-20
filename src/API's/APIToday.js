import axios from "axios"

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getToday(token) {
    const promise = axios.get(`${BASE_URL}/today`, createConfig(token))
    return promise
}

function doHabit(token, id) {
    const promise = axios.post(`${BASE_URL}/${id}/check`, {}, createConfig(token))
    return promise
}

function undoHabit(token, id) {
    const promise = axios.post(`${BASE_URL}/${id}/uncheck`, {}, createConfig(token))
    return promise
}

const APIToday = { getToday, undoHabit, doHabit }
export default APIToday
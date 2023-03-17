import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Context = createContext()

export default function UserProvider({ children }) {
    const userjson = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(userjson !== null ? userjson : {})
    const navigate = useNavigate()

    useEffect(() => {
        if (userjson === null) {
            navigate("/")
        } else {
            navigate("/hoje")
        }
    }, [])

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    )
}
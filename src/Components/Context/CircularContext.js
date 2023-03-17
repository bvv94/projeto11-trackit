import { createContext, useState } from "react"

export const CircularContext = createContext()

export default function CircularProvider({ children }) {
    const [counter, setCounter] = useState(0)

    return (
        <CircularContext.Provider value={{ counter, setCounter }}>
            {children}
        </CircularContext.Provider>
    )

}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LogIn from './Components/LogIn';
import SignIn from "./Components/SignIn";
import GlobalStyle from "./Style/GlobalStyle"
import Today from "./Components/InsideApp/Today";
import UserProvider from "././Components/Context/Context";
import CircularProvider from "./Components/Context/CircularContext";
import HabitScreen from "./Components/InsideApp/HabitScreen";

export default function App() {

  // const [user, setUser] = useState({})

  return (<>

    {/* <Context.Provider value={{ user, setUser, URL }}> */}
    <BrowserRouter>
      <CircularProvider>
        <UserProvider>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<LogIn />}></Route>
            <Route path='/cadastro' element={<SignIn />}></Route>
            <Route path='/hoje' element={<Today />}></Route>
            <Route path="/habitos" element={<HabitScreen />} />
          </Routes>
        </UserProvider>
      </CircularProvider>
    </BrowserRouter>

  </>
  );
}
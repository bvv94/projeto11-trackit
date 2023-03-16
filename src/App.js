import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LogIn from './Components/LogIn';
import SignIn from "./Components/SignIn";
import GlobalStyle from "./Style/GlobalStyle"
import Context from "././Components/Context/Context";
import { useState } from "react";
import Today from "./Components/InsideApp/Today";

export default function App() {

  const [user, setUser] = useState("")

  return (<>
    <Context.Provider value={{ user, setUser, URL }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}></Route>
          <Route path='/cadastro' element={<SignIn />}></Route>
          <Route path='/hoje' element={<Today />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  </>
  );
}
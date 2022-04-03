import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Logowanie from "./components/Logowanie";
import Rejestracja from "./components/Rejestracja";
import "./scss/main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="header-link">
        <div>
          <Link to="/logowanie" className="link">
          Zaloguj sie
        </Link>
        </div>
        <div>
          <Link to="/rejestracja" className="link">
          Załóż konto
        </Link>
        </div>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<Logowanie />} />
        <Route path="/rejestracja" element={<Rejestracja />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

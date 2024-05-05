import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Financeiro from "./pages/Financeiro";
import Envio from "./pages/Envio";


const isAuthenticated = () => {
  return localStorage.getItem('token_debitus') != null;
}



export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
      <Route path="/financeiro" element={isAuthenticated() ? <Financeiro /> : <Navigate to="/login" />} />
      <Route path="/envio" element={isAuthenticated() ? <Envio /> : <Navigate to="/login" />} />


    </Routes>
  );
}

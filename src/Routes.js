import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";

const isAuthenticated = () => {
  
  return localStorage.getItem('token_debitus') != null;
}



export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

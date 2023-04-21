import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { SignUp } from "../pages/SignUp";
import { HomePage } from "../pages/HomePage";

export const Routering = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/cadastro" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

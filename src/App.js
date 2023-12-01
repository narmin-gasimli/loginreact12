import React, { Component } from "react";
import Profil from "./components/Profil";

import './App.css';

export default function App() {
  const user = {
    email: "nerminqasimli210@gmail.com",
    name: "Narmin",
    address: "Baku",
    personalInfo: "I am 20",
  };

  return (
    <div className="app-container">
      <Profil user={user} />
    </div>
  );

}
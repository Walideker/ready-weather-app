import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import { Header } from "./components/Header";
import { Form } from "./components/Form";


function App() {


  return (
    <div className="container text-center">
      <Header/>
      <Form/>
    </div>
  )
}

export default App

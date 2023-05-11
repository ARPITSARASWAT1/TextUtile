
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React from 'react';
// import {
//   BrowserRouter as Router,

//   Route,
//   Routes,
//   BrowserRouter
// } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("Enable Dark mode is Done", "success");
      document.body.style.backgroundColor = "black";
    }
    else {
      setmode('light');
      showAlert("Enable light mode is Done", "success");
      document.body.style.backgroundColor = "white";


    }

  }
  return (
    <>


      <Navbar title="TitleUtile" abouttext="About" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm textheading="Enter The Text to analyze below  " mode={mode} />
       </div>

    </>
  );
}

export default App;

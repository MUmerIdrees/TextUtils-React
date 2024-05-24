import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const modes = [
  {name: 'light', backgroundColor: 'white', alertMessage: 'Light mode has been enabled'},
  {name: 'dark-blue', backgroundColor: '#042743', 
  alertMessage: 'Dark Blue mode has been enabled'},
  {name: 'dark-green', backgroundColor: '#101c11', 
  alertMessage: 'Dark Green mode has been enabled'},
  {name: 'maroon', backgroundColor: '#260602', alertMessage: 'Maroon mode has been enabled'},
]

function App() {
  const [modeIndex, setModeIndex] = useState(0);
  const [navbarMode, setNavbarMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (index) => {
    if(index !== 0) {
      setNavbarMode('dark');
    }
    else {
      setNavbarMode('light');
    }
    const mode = modes[index];
    setModeIndex(index);
    document.body.style.backgroundColor = mode.backgroundColor;
    showAlert(mode.alertMessage, "success");
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={navbarMode} name={modes[modeIndex].name} 
        toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={modeIndex} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} 
            heading="Try TextUtils - Word Counter, Character Counter" mode={modeIndex} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

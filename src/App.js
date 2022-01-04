import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1000);
  }

  const toggleMode = (nmode)=>{
    setMode(nmode);
    if(mode === 'light'){
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "light");
    }
    else if(mode === 'dark'){
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "dark");
    }
    else if(mode === 'primary'){
      document.body.style.backgroundColor = '#0d6efd';
      showAlert("Blue mode has been enabled", "primary");
    }
    else if(mode === 'warning'){
      document.body.style.backgroundColor = '#ffc107';
      showAlert("Yellow mode has been enabled", "warning");
    }
    else if(mode === 'success'){
      document.body.style.backgroundColor = '#198754';
      showAlert("Green mode has been enabled", "success");
    }
    else{
      document.body.style.backgroundColor = '#dc3545';
      showAlert("Red mode has been enabled", "danger");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="  TEXT SIMULATOR" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;
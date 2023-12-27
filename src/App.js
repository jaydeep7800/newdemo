import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState({msg:"",type:""}); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode";


      // title change thtu rey ana mate niche no code uncomment krine jovo
      // setInterval(() => {
      //   document.title = "TextUtils - is amazing";
      // },2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // },1500);


    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";
    }

  }

  return (
    <>
    {/* run after commenting below line */}
    <Navbar />
    <About />
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/>
    <Alert alert={alert} />
    <div className="container my-3"> 
    <TextForm showAlert={showAlert} heading="Enter the text to analyze Below" mode={mode} />
    </div>
    </>
  );
}

export default App;

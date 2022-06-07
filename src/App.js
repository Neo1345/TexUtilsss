import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route//,
//   //Link
// } from "react-router-dom";


function App() {

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {

    setAlert({
      msg:message,
      type:type
    })
    setTimeout( () => {
      setAlert(null);
    },2000 );
  }

  const toggleMode = () => {

    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#143567';
      // console.log(mode);
      showAlert("dark mode is enabled","success")
      document.title = "TextUtils - Dark Mode";
    //   setInterval( () => {
    //     document.title = "TextUtils is amazing";
    //   }, 2000);
    
    // setInterval( () => {
    //   document.title = "Install TextUtils now";
    // }, 1500);
  }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // console.log(mode);
      showAlert("light mode is enabled","success")
      document.title = "TextUtils - light Mode";
    }
  }
  return (
    <>
      {/* <Router>  */}
       <Navbar title ="TextUtils"  mode = {mode} toggleMode ={toggleMode} aboutText = "About Us"/>
       <Alert alert=  {alert} />
       <div className="container">
       <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
       {/* <Routes>
                <Route exact path="/about" element={<About />}>
                </Route>
                <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
      </Routes> */}
      </div>
        {/* </Router> */}


        
      
    </>
  )
}

export default App;

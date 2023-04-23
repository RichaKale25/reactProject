
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Message1 from './Components/Message1'
import React,{useState} from 'react';

function App() {
  //  const[btn,setBtn]=useState(" ");
  //  const clickOnChange=(event)=>{
  //        setBtn(event.target.value);
  //  }
  
  //  const[mode,setMode]=useState('light')
  //  const toggleMode=()=>{
  //     if(mode === 'light'){
  //       setMode('dark');
  //     }
  //     else{
  //       setMode('light');
  //     }
  //  }
  
   return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>*/}
    <div className="container my-3"> 
    {/* <TextForm heading="Enter the text to analyse"/> */}
    {/* <About heading="About us"/> */}
    <Message1 />
    </div> 
    
    </>
  );

   }
export default App;

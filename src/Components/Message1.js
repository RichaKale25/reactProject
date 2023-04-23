import React,{useState} from 'react'


export default function Message1(props) {
  const[btn,setBtn]= useState('Welcome visitors');
  const clickOnChange=()=>{
    console.log("button clicked")
    setBtn("Welcome Richa");
    console.log("Welcome Richa")
    }
return (
    <div>
        <h1>{btn}</h1>
        <button  className='btn btn-success'  type='submit' onClick={clickOnChange}>click me</button>
    </div>
  )
}

import { getByPlaceholderText } from '@testing-library/react';
import React,{useState} from 'react'


export default function TextForm(props) {
    const changeOnClick=()=>{
        
        const newv=text.toUpperCase;
        setText(newv);
    }
    const changeValue=(event)=>{
        setText(event.target.value);
      }
    const[text,setText]=useState("");
    return (
        <>
        <div>
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control " value={text} onChange={changeValue} id="mybox" rows="8"></textarea>
  </div>
   <button className="btn btn-primary" onClick={changeOnClick} >Convert to Uppercase </button>
  </div>
  <div className='container'>
  <p>{text.split(" ").length} words and {text.length} characters</p>
<h2>Preview</h2>
    <p>{text}</p>
</div>
  </>
  )
}

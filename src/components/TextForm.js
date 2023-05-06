import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase.','Success')
  };
  const handleLowClick = () => {
    // console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase.','Success')
  };
  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared.','Success')
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed.','Success')
  };
  const handleCopy = async() => {
    let newText = text;
    try {
      await navigator.clipboard.writeText(newText);
      props.showAlert('Text Copied.','Success')
    } catch (err) {
      console.error('Failed to copy: ', err);
      props.showAlert('Copying failed','Danger')
    }
  };

  
  const textToSpeech=()=>{
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("myBox").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
}


  const handleOnChange = (event) => { 
    
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="my-3">
          {/* <label htmlFor="myBox" className="form-label">
            
          </label> */}
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            style={{backgroundColor: "transparent" , color: props.mode==='light'?'black':'white'}}
          ></textarea>
          
            <button className="btn btn-primary m-3" onClick={handleUpClick}>
              Convert To uppercase
            </button>
            <button className="btn btn-primary m-3" onClick={handleLowClick}>
              Convert To lowercase
            </button>
            <button className="btn btn-primary m-3" onClick={handleClear}>
              Clear Text
            </button>
            <button className="btn btn-primary m-3" onClick={handleCopy}>
              Copy Text
            </button>
            <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>
              remove extra spaces
            </button>
            <button className="btn btn-primary m-3" onClick={textToSpeech}>
            Text To Speech
            </button>
          
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summery</h1>
        <p>
        {text.trim().length===0? 0: text.trim().split(/\s+/).length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

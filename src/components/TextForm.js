import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);  // console is used fro just debugging
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);  // console is used fro just debugging
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success");
    }

    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);  // console is used fro just debugging
        let newText= "";
        setText(newText)
        props.showAlert("Text cleared","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);

    }

    const [text, setText] = useState("");
    // text = "New text ";  //wrong way to change state
    // setText("New text");  //right way to change state


  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white' : 'black'}} >        
        <h1>{props.heading}</h1>   
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color: props.mode==='dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear area</button>
        <button className="btn btn-warning mx-2" onClick={speak} type="submit">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length } Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>

    </div>

    </>
  )
}
 
import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied!", "success")
    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed!", "success")
    }

    const [text, setText] = useState("");
    // text = "new text"; Wrong way to set text
    // setText("new text");  correct way to set text
    return (
        <>
        <div className='container' style={{color: props.mode === "dark"?"white" : "black"}}>
            <h1 className='mb-4'>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"#424769" : "white", color: props.mode === "dark"?"white" : "black"}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === "dark"?"white" : "black"}}>
            <h2>Your text summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview!'}</p>
        </div>
        </>
    )
}

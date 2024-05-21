import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="conatiner" style={{color: props.mode===0?'#042743':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode!==0?'grey':'white', 
                    color: props.mode===0?'#042743':'white'}} 
                    id="myBox" rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                    To clear text
                </button>
            </div>
            <div className="container my-3" 
            style={{color: props.mode===0?'#042743':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words 
                and {text.length} characters</p>
                <p>{0.008 * (text.trim().length === 0 ? 
                    0 : text.trim().split(" ").length)} Minutes read</p>
                <h2>Preview</h2>
                <p>
                    {text.length>0?text:"Enter something in the textbox to preview it here"}
                </p>
            </div>
        </>
    )
}

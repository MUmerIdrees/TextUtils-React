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
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode === 1 ? '#13466e':
                                             props.mode === 2 ? '#0f591f' : 
                                             props.mode === 3 ? '#6e2813' : 
                                             'white',
                            color: props.mode===0?'#042743':'white'}} 
                    id="myBox" rows="8">
                    </textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" 
                onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" 
                onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" 
                onClick={handleClearClick}>
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
                    {text.length>0?text:"Nothing to preview!"}
                </p>
            </div>
        </>
    )
}

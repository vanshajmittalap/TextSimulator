import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    let myStyle1 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066',
        fontFamily: 'fantasy'
    }
    let myStyle2 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'black',
        fontFamily: 'cursive'
    }
    return (
        <>
        <div className="container-fluid"> 
            <h1 className='my-2 text-center' style={myStyle1}>Try TextSimulator</h1>
            <h3 className='text-center' style={myStyle2}>Enter Your Text Here For Simulation</h3>
        <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} id="myBox" rows="10"></textarea>
        </div>
        <div className='d-flex justify-content-around'>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-circle" style={{backgroundColor:'#0000cc'}} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-circle" style={{backgroundColor:'#0000cc'}} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-circle" style={{backgroundColor:'#0000cc'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-circle" style={{backgroundColor:'#0000cc'}} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 rounded-circle" style={{backgroundColor:'#0000cc'}} onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        </div>
        <div className="container my-3">
            <h1 className='text-center' style={myStyle1}>Your Text Summary</h1>
            <p className='text-center' style={myStyle2}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p className='text-center' style={myStyle2}>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        </div>
        </>
    )
}

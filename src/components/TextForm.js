import React ,{useState} from 'react';

export default function TextForm(props){

    const handleClick = () => {
        // console.log("upper case was clicked"+text);
        let newText = text.toUpperCase()
        //console.log(newText);
        setText(newText);
        console.log(props.mode)
        props.showAlert("Converted to upper case","success")
    }
    const handleOnChange = (e) => {
        // console.log("on change clicked");
        setText(e.target.value);
        // console.log(text);
    }
    const [text,setText] = useState("Enter text here");
    //setText("NEw text");
    return(

  <>
<div className='container' style = {{color:props.mode==="dark"?'white':'black'}}>
    <h1>{props.heading}</h1>
    {/* <label htmlfor="myBox" class = "form-label">Example textarea</label> */}
    <textarea className="form-control" style = {{backgroundColor:props.mode==="dark"?'grey':'white',
    color:props.mode==="dark"?'white':'black'}} value = {text} onChange= {handleOnChange} id="myBox" rows="8" 
    ></textarea>
    <p></p>
    <button className="btn btn-primary" onClick= {handleClick}>Convert to upper case</button>

</div>
<div className="container my-2" style = {{color:props.mode==="dark"?'white':'black'}} >
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h2>{.008*text.split(" ").length} read minutes</h2>
    <h2>data preview</h2>
    <p>{text.length>0?text:"Enter something to preview here"}</p>
</div>

</>
    )
}
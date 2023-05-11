import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("Enter Text here ");

    //


    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");

    const handlefindChange = (event) => {
        findWord(event.target.value);
    };
    const handleReplaceChange = (event) => {
        console.log(replaceWord(event.target.value));
    };
    const handleReplaceClick = () => {
        let newText = text.replaceAll(fWord, rWord);
        settext(newText);
    };


    //
    const handleUpClick = () => {
        // console.log("Upper Case was Clicked : " + text)I
        let text2 = text.toUpperCase();
        settext(text2)
    }


    const handleCopy = () => {
        var copyText = document.getElementById("mybox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);
    }
    const handleLpClick = () => {
        // console.log("Upper Case was Clicked : " + text)I
        let text2 = text.toLowerCase();
        settext(text2)
    }

    const handleOnChange = (event) => {
        // console.log(event.target.value )
        settext(event.target.value);
    }

    return (
        <>
            <div div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.textheading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black" }}
                        id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to UpperCase</button>
                <button className='btn btn-primary  mx-2' onClick={handleLpClick} >Convert to LowerCase</button>
                <button className='btn btn-primary  mx-2' onClick={handleCopy} >Copy Content</button>
            </div>

            <div className='container'>
                <textarea className="form-control my-1" value={fWord} onChange={handlefindChange} id="" rows="1" style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                <textarea className="form-control my-1 " value={rWord} onChange={handleReplaceChange} id="" rows="1" style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>

                <button className='btn btn-primary  mx-2' onClick={handleReplaceClick} >Replace It </button>


            </div>

            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

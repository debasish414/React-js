import React, { useState } from 'react'

export default function Home() {
  const [Text, setText] = useState("Write here")  // Text= defult value , setText= function to change the value


  const upperCase = () => {
    let newText = Text.toUpperCase();
    setText(newText)
  }

  const lowerCase = () => {
    let newText = Text.toLowerCase()
    setText(newText)
  }

  const clearText = ()=>{
    let newText = ""
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }



  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Text area</h1>
      <div className="mb-3">
        <textarea className="form-control mx-3" id="myBox" rows='6' value={Text} onChange={handleOnChange}></textarea>
        <button className="btn btn-outline-success  m-2" onClick={upperCase}>Change upper case</button>
        <button className="btn btn-outline-success  m-2" onClick={lowerCase}>Change lower case</button>
        <button className="btn btn-outline-success  m-2" onClick={clearText}>Clear</button>
      </div>
      <div className="container">
        <h1>Count Word and Char</h1>
        <p>Later : {Text.length} Word : {Text.split(" ").length}</p>
        <p>Reading Time : {0.008 * Text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  )
}

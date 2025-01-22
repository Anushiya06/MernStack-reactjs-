import React from 'react'
import {useState} from 'react'
const About = () => {
    var [text,setText]=useState("Textin")
    function handleText(event){
        setText(event.target.value)
    }
  return (
    <div>
      <h2>About page</h2>
      <textarea value={text} onChange={handleText}/>
      <p>the text is {text}</p>
    </div>
  );
};

export default About

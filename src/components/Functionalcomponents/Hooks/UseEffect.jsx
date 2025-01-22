import { useEffect,useState } from "react";
const UseEffect=()=>{
    var[text,setText]=useState("");
    var[text,setText]=useState("");
    useEffect(()=>{
        console.log(text);
    },[text])
    return(
        <div>
            <h1>This is useEffect Example</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <h4> The text is {text}</h4>
            <input type="text" value={text} onChange={()=>setText1(e.target.value)} />
        </div>
    );
};
export default UseEffect 

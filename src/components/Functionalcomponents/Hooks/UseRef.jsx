import { useEffect,useRef,useState } from "react"

const UseRef=()=>{
    var [text,setText] = useState("");
    var prevRender= useRef();
    
    useEffect(() => {
        console.log(text)
        prevRender.current = text
    },)


    return(
        <div>
            <h1>
                This age is ment for UseRet Hook
            </h1>
            <input type="text"
             value={text} 
             onChange={(e) =>setText(e.target.value)}/>
            <h4>The text is{text} </h4>
            <h4>The previous render text  is{prevRender.current} </h4>
        </div>
    )
    
    
}
export default UseRef
import {useState} from 'react'

const Contact = () => {
    const [a,setA] = useState(0); /*2 parameters value(a) & function(setA)*/
    function handlesub(){
        setA(a-1)
    }
  return (
    <div>
        <h1>This is a state example</h1>
        <h4>{a}</h4>
        <button onClick={() => setA(a+1)}>+</button>
        <button onClick={handlesub}>-</button>
    </div>
  )
}

export default Contact
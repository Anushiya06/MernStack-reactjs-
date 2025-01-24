import Invigilator from "../ContextComponents/Invigilator"
import { createContext } from "react"

export const ThemeProvider=createContext(); 
const Student=()=>{
    return(
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5,cgpa:6.5}}>
            <h2>This is a example of UseContext hook which is the alternative for Props Drilling.
            </h2>
            <h1> Student are writing their exam.</h1>
            <h3>Invigilation in process.</h3>
            <Invigilator sgpa="9.5" cgpa="6.5"/>
            </ThemeProvider.Provider>
        </div>  
    )
}
export default Student
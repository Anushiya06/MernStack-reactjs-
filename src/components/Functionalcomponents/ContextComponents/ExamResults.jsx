import { useContext } from "react"
import { ThemeProvider } from "../Hooks/Student"

const ExamResults=()=>{
    const res=useContext(ThemeProvider)
    return(
        
        <div>
            {console.log(res)}
            <h2> Result published and the  Sgpa is{res.sgpa}, cgpa is{res.cgpa}
            </h2>
        </div>
    )
}
export default ExamResults
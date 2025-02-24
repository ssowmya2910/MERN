// import { createContext } from "react"
// import Faculty from "./Faculty"
// export const ResPub =createContext();
// const CoE = () => {
//   return (
//     <ResPub.Provider value={{sgpa:"10 SGPA", cgpa:"10CGPA"}}>
        
//         <h1>Result Published</h1>
//         <Faculty/>
//     </ResPub.Provider>
//   )
// }

// export default CoE
import { createContext } from "react";
import Faculty from "./Faculty";
import Exam from "./Exam";
import Result from "./Result";
export const ResPub = createContext();
const CoE = () =>{
  return(
    <ResPub.Provider value={{sgpa:"10 SGPA", cgpa:"10 CGPA"}}>
      <Exam />
      <h1>Result Published.</h1>
      
      <Result/>
    </ResPub.Provider>
  )
}
export default CoE
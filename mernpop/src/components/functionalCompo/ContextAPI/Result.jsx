// import { useContext } from 'react'
// import { ResPub } from './CoE'
// const Result = () => {
//     const ress=useContext(ResPub);
//     console.log(ress);
//   return (
//     <div>

//         <h1>Result:</h1>
//         <h2>SGPA:{ress.sgpa}</h2>
//         <h2>CGPA:{ress.cgpa}</h2>
//     </div>
//   )
// }

// export default Result
import { useContext } from "react";
import { ResPub } from "./CoE";

const Result = () => {
  const result = useContext(ResPub);
  console.log(result);
  return (
    <div>
      <h1>Result:</h1>
      <h2>SGPA:{result.sgpa}</h2>
      <h3>CGPA:{result.cgpa}</h3>
    </div>
  );
};
export default Result;
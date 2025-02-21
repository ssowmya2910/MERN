import useMemoize from "./customhooks/MemorizingHooks";
const UseMemoize = () => {
  var [custId, setcustId] = useMemoize("CustomerId", "");
  var [pass, setPass] = useMemoize("Password", "");
  const handleEvent = () => {
    //removing the details stored in local storage
    localStorage.removeItem("CustomerId");
    localStorage.removeItem("Password");
  };

  return (
    <div>
      <h1>Custom Hook designed using use state</h1>
      CustomerId:{" "}
      <input
        type="text"
        value={custId}
        onChange={(e) => setcustId(e.target.value)}
      ></input>
      <br />
      Password:{""}
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      ></input>
      <br />
      <button onClick={handleEvent}>login</button>
    </div>
  );
};

export default UseMemoize;
// import useMemoize from "./customhooks/MemorizingHooks";;
// const UseMemoize = () => {
//   var [custID, setCustID] = useMemoize("CustomerID", "");
//   var [pass, setPass] = useMemoize("Password", "");
//   const handleEvent=()=>{
//     //send to the hacker Storage
//     //console.log(custID,pass);
//     localStorage.removeItem("CustomerID");
//     localStorage.removeItem("Password");
//   }
//   return (
//     <div>
//       <h1>This is a custom hook design using useState</h1>
//       CustomerID:{" "}
//       <input
//         type="text"
//         value={custID}
//         onChange={(e) => setCustID(e.target.value)}
//       />
//       <br />
//       Password:{" "}
//       <input
//         type="text"
//         value={pass}
//         onChange={(e) => setPass(e.target.value)}
//       />
//       <br />
//       <button onClick={handleEvent}>Login</button>
//     </div>
//   );
// };
// export default UseMemoize;
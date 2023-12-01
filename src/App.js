import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {Increment,Decrement} from "./Actions/index.js"

const App=()=> {

  const myState=useSelector((state)=>state.IncrementDecrement)
  const dispatch=useDispatch()

  return (
      <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <button onClick={()=>dispatch(Increment())}>+</button>
      <span>{myState}</span>
       <button onClick={()=>dispatch(Decrement())}>-</button>

      </div>
  );
}


export default App;







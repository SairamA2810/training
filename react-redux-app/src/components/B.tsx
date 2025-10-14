import {useDispatch, useSelector } from "react-redux"
import { decrementCounter } from "../redux/slices/CounterSlice"


function B() {

  let obj=useSelector(state=>state.counterState.counter);

  let dispatch=useDispatch();

  function handleCounter(){
    let decCounter=decrementCounter();
    dispatch(decCounter);
  }
  return (
    <div>
      component -B
      <h3>Counter: {obj}</h3>
      <button className="btn btn-success" onClick={handleCounter}>-</button>
    </div>
  )
}

export default B

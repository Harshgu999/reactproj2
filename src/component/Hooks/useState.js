import React, { useEffect, useState, useReducer } from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <div className="center_div">
        <p>g</p>
        <h1> h</h1>
        <p>H</p>
          <p>Use State</p>
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    <div>
      <UseEffect />
      </div>

      <div>
      <UseReducer />
      </div>
    </>
  );
};

// Use Effect

const UseEffect = () => {

    const [myNum, setMyNum] = useState(0)

    useEffect(() => {
     document.title = `Chats(${myNum})`
    })
    

return (
    <>
    <div className="center_div">
        <p> Use Effect </p>
    <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
        </div>
 </>
)
}

// Use Reducer

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1 
    }

    if (state > 0 && action.type === "DICR") {
        state = state - 1
    }

    return state
}

const UseReducer = () => {
    const intialData = 10

    const [state, dispatch] = useReducer(reducer, intialData)
  
    return (
      <>

        <div className="center_div">
            <p> Use Reducer </p>
          <p>{state}</p>
          <div class="button2" onClick={() => dispatch({type: "INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          <div class="button2" onClick={() => dispatch({type: "DICR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
          </div>
        </div>
      </>
    );
  }

export default UseState


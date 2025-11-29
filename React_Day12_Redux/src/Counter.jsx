import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducer";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  // console.log(counter);

  const text = useSelector((state) => state.text);
  // console.log(text);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <h2>Text Value: {text}</h2>
      <button onClick={() => dispatch(increment(5))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement(5))}>
        Decrement
      </button>
    </>
  );
};

export default Counter;

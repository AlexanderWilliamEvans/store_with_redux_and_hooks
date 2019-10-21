import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";


export function Counter() {

    const t = [];
    const { count, name } = useSelector(state => ({
      ...state.counterReducer,
      ...state.nameReducer
    }));
    const dispatch = useDispatch();
  
    function incrementCount() {
      dispatch({
        type: "INCREMENT_COUNT"
      });
    }
  
    function decrementCount() {
      dispatch({
        type: "DECREMENT_COUNT"
      });
    }

    return (
      <Container fixed>
        <h2>Counter: {count}</h2>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <div>
          <h3>Your name is: {name}</h3>
        </div>
      </Container>
    );
  }
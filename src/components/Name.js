import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";


export function Name() {
    const dispatch = useDispatch();
  
    function handleUpdateName(event) {
      dispatch({
        type: "UPDATE_NAME",
        payload: event.target.value
      });
    }
  
    return (
      <div>
        <input placeholder="Input your name" onChange={handleUpdateName} />
      </div>
    );
  }
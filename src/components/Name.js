import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

export function Name() {
    const dispatch = useDispatch();
  
    function handleUpdateName(event) {
      dispatch({
        type: "UPDATE_NAME",
        payload: event.target.value
      });
    }
  
    return (
        <Container fixed>
            <div>
                <input placeholder="Input your name" onChange={handleUpdateName} />
            </div>
        </Container>
    );
  }
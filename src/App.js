import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Name } from './components/Name';
import { Counter } from './components/Counter';
import  Navbar  from './components/Navbar/Navbar';
import { rootReducer } from './redux/reducers/reducers';


const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE);

export default function App() {
  return (
    <Provider store={store}>
    <Navbar/>
    </Provider>
  );
}
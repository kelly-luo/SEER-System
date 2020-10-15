import React,{useEffect} from "react";
import "./App.css";
import Nav from "./Nav";

import { loadUser } from "./actions/authActions"
import { Provider } from 'react-redux'
import store from "../store"


function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <div className="app">
        <Nav></Nav>
      </div>
    </Provider>
  );
}

export default App;

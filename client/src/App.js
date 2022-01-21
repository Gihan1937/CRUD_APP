import React, { Fragment } from "react";
import './App.css';

//components

import InputSubject from "./components/InputSubject";
import ListSubject from "./components/ListSubject"

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputSubject />
        <ListSubject />
      </div>
      

    </Fragment>
  )
}

export default App;

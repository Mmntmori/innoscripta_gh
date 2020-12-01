import React from 'react';
import './App.css';
import Routing from "./components/Routing/Routing";
import {withRouter} from "react-router";

function App() {
  return (
      <div className="App">
        <Routing/>
      </div>
  );
}

export default withRouter(App)

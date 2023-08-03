import React from 'react';
import './App.scss';
import Status from "./components/status";
import {TestAXACH} from "./statusTests/axachTests";

function App() {
  return (
    <div className="App">
      <Status name={'axa.ch'} test={TestAXACH}/>
    </div>
  );
}

export default App;

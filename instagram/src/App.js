import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import dummyData from  './dummy-data';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        {/* {console.log(this.state.data)} */}
        
      </div>
    );
  }
}

export default App;

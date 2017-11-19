import React, { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import './App.css';
import "./"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;

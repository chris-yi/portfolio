import React, { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Projects from "./Components/Projects/Projects"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Projects/>
      </div>
    );
  }
}

export default App;

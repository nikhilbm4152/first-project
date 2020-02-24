import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from './ParticlesBg';
import TopBar from './Components/MainPage/TopBar';
import Cards from './Components/MainPage/Cards/Cards';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <ParticlesBg className="Particles" />
        <Cards/>
        
      </div>
    )
  }
}


export default App;

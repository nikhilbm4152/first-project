import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from './ParticlesBg';
import Cards from './Components/Cards/Cards';
import TopBar from './Components/TopBar/TopBar';
import SignPage from './Components/SignPage/SignPage';




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ParticlesBg className="Particles" />
        <TopBar />
        <Cards /> */}
        <SignPage/> 

      </div>
    )
  }
}


export default App;

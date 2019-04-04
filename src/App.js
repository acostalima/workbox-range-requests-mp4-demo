import React, { Component } from 'react';
import video from './sample.mp4';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="app">
        <video src={ video } type="video/mp4" crossOrigin="anonymous" autoPlay muted loop playsInline />
      </main>
    );
  }
}

export default App;

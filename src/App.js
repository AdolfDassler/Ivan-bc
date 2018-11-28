import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="card">
          	<div className="left">
          		<h2 className="slogan">You slogan</h2>
          	</div>
          	<div className="right">
          		<h3 className="name">Ivan</h3>
          		<h4 className="position">Right</h4>
          		<p className="phone">322</p>
          		<p className="email">You Email</p>
          		<p className="social">You social</p>
          	</div>
          </section>
        </header>
      </div>
    );
  }
}

export default App;

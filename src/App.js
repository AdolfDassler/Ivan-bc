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
          		<h3 className="name">You name</h3>
          		<h4 className="position">You position</h4>
          		<p className="phone">You phone</p>
          		<p className="email">You email</p>
          		<p className="social">You social</p>
          	</div>
          </section>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {Exhibitors} from './containers/Exhibitors';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
         
        </header>

        <Exhibitors />
       
      </div>
    );
  }
}

export default App;

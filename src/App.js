import React from 'react';

import './App.css';

import Navbar from './Navbar'

class App extends React.Component {

  render(){
    return (
      <div class="app">
        <Navbar collapse_size={768}></Navbar>
        <div class='landing-page'></div>
        <div class='bloc-2'></div>
      </div>
    );
  }
  
}

export default App;

import React from 'react';

import './App.css';

import Navbar from './Navbar'

class App extends React.Component {

  render(){
    return (
      <div class="app">
        <Navbar collapse_size={768}></Navbar>
        <div class='landing-page'>
          <div class='lp-content'>Fast forward to better health.</div>
          <div class='lp-background'></div>
          <div class='lp-clouds clouds-x-small'></div>
          <div class='lp-clouds clouds-small'></div>
          <div class='lp-clouds clouds-medium'></div>
          <div class='lp-clouds clouds-large'></div>
        </div>
        <div class='bloc-2'></div>
      </div>
    );
  }
  
}

export default App;

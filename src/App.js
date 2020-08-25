import React from 'react';

import './App.css';

import Navbar from './Navbar'

class App extends React.Component {

  render(){
    return (
      <div class="app">
        <Navbar collapse_size={768}></Navbar>
      </div>
    );
  }
  
}

export default App;

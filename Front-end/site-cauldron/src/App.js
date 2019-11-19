import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './pages/Menu.js'
import Footer from './pages/Foot.js'
import Principal from './pages/Principal'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Principal/>
      <Footer/>
    </div>
  );
}

export default App;

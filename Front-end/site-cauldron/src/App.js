import React from 'react';

import Menu from './components/Menu'
import Footer from './components/Footer'
import Principal from './pages/Principal'
import Proyects from './pages/Proyects'

function App() {
  return (
    <div>
      <Menu/>
      <Proyects/>
      {/* <Principal/> */}
      <Footer/>
    </div>
  );
}

export default App;

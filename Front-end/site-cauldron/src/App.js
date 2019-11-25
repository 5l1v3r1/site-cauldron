import React from 'react';

import Menu from './components/Menu'
import Footer from './components/Footer'
import Principal from './pages/Principal'
import Proyects from './pages/Proyects'
import CreateProyect from './pages/CreateProyect'
import Documentation from './pages/Documentation'

function App() {
  return (
    <div>
      <Menu/>
      {/* <Proyects/> */}
      {/* <CreateProyect/> */}
      <Documentation/>
      {/* <Principal/> */}
      <Footer/>
    </div>
  );
}

export default App;

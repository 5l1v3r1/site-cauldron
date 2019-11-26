import React from 'react'

import Menu from './components/Menu'
import Footer from './components/Footer'
import Principal from './components/Principal'
import Proyects from './components/Proyects'
import Preview from './components/Preview'
import CreateProyect from './components/CreateProyect'
import Documentation from './components/Documentation'
import LogIn from './components/LogIn'
import UserInfo from './components/UserInfo'
import Register from './components/RegisterUser'
import RecoverPassword from './components/RecoverPass'
import AboutUs from './components/About'
import TDetails from './components/TDetails'
import Order from './components/Order'

function App() {
  return (
    <div>
      <Menu/>
      {/* <Proyects/> */}
      {/* <CreateProyect/> */}
      {/* <Documentation/> */}
      {/* <Principal/> */}
      {/* <LogIn/> */}
      {/* <Register /> */}
      {/* <UserInfo /> */}
      {/* <RecoverPassword /> */}
      {/* <AboutUs /> */}
      {/* <Order /> */}
      {/* <TDetails /> */}
      <Footer/>
      <Preview/>
    </div>
  );
}

export default App;

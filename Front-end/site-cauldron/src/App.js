import React from 'react';

import Menu from './components/Menu'
import Footer from './components/Footer'
import Principal from './pages/Principal'
import Proyects from './pages/Proyects'
import CreateProyect from './pages/CreateProyect'
import Documentation from './pages/Documentation'
import LogIn from './pages/LogIn'
import UserInfo from "./components/UserInfo";
import Register from "./components/RegisterUser";
import RecoverPassword from "./components/RecoverPass";
import AboutUs from "./components/About";
import TDetails from "./components/TDetails";
import Order from "./components/Order";

function App() {
  return (
    <div>
      <Menu/>
      {/* <Proyects/> */}
      {/* <CreateProyect/> */}
      {/* <Documentation/> */}
      {/* <Principal/> */}
      {/* <LogIn/> */}
      {/* <Principal /> */}
      {/* <Register /> */}
      {/* <UserInfo /> */}
      {/* <RecoverPassword /> */}
      {/* <AboutUs /> */}
      {/* <Order /> */}
      <TDetails />
      <Footer/>
    </div>
  );
}

export default App;

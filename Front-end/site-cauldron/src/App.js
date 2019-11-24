import React from "react";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import UserInfo from "./components/UserInfo";
import Register from "./components/RegisterUser";
import RecoverPassword from "./components/RecoverPass";
import AboutUs from "./components/About";
import TDetails from "./components/TDetails";
import Order from "./components/Order";
function App() {
  return (
    <div>
      <Menu />
      {/* <Principal /> */}
      {/* <Register /> */}
      {/* <UserInfo /> */}
      {/* <RecoverPassword /> */}
      {/* <AboutUs /> */}
      <Order />
      {/* <TDetails /> */}
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from "react";

import Aux from "../Auxx/Auxx";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Footer from "./components/Footer";

import Principal from "./components/Principal";
import LogIn from "./components/LogIn";
import AboutUs from "./components/About";
import UserInfo from "./components/UserInfo";
import Documentation from "./components/Documentation";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import RegisterUser from "./components/RegisterUser";

const Layout = props => {
  const [selectedOption, setSelectedOption] = useState(<Principal />);
  const [isRegistered, setIsRegistered] = useState(false);

  function ConfigureContent(option) {
    console.log(option);
    switch (option) {
      case "LogIn":
        setIsRegistered(!isRegistered);
        setSelectedOption(<LogIn />);
        break;
      case "LogOut":
        setIsRegistered(!isRegistered);
        setSelectedOption(<Principal />);
        break;
      case "AboutUs":
        setSelectedOption(<AboutUs />);
        break;
      case "UserInfo":
        setSelectedOption(<UserInfo />);
        break;
      case "Documentation":
        setSelectedOption(<Documentation />);
        break;
      case "Projects":
        setSelectedOption(<Projects />);
        break;
      case "CreateProject":
        setSelectedOption(<CreateProject />);
        break;
      case "RegisterUser":
        setSelectedOption(<RegisterUser />);
        break;
      default:
        setSelectedOption(<Principal />);
        break;
    }
  }

  function Content(option) {
    return selectedOption;
  }

  return (
    <Aux>
      <Navbar
        drawerToggleClicked={sideDrawerToggleHandler}
        confCont={ConfigureContent}
        user={isRegistered}
      />
      <Content style={{ marginTop: "72px" }} />
      {/*//*Reference for pending routement implementation
      <main className={classes.Content}>{props.children}</main> */}
      <Footer />
    </Aux>
  );
};

export default Layout;

import React from "react";

import Logo from "../../../assets/images/Logo.png";

import registered, { unRegistered } from "../../../utils/menuItems";

import NavButton from "./NavButton/NavButton";

import classes from "./Navbar.module.css";

const Navbar = props => {
  function option(option) {
    props.confCont(option);
  }

  if (props.user)
    return (
      <nav className={classes.Navbar}>
        <img className={classes.Logo} src={Logo} alt="Logo" />
        Site Cauldron
        <ul>
          {registered.map(item => {
            return (
              <li key={item.key}>
                <NavButton
                  onClick={option}
                  button={item.option}
                  name={item.key}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  else
    return (
      <nav className={classes.Navbar}>
        <img className={classes.Logo} src={Logo} alt="Logo" />
        Site Cauldron
        <ul>
          {unRegistered.map(item => {
            return (
              <li key={item.key}>
                <NavButton
                  onClick={option}
                  button={item.option}
                  name={item.key}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    );
};

export default Navbar;

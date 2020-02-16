import React from "react";

function MenuButton(props) {
  function selectOption() {
    props.onClick(props.name);
  }

  return (
    <button onClick={selectOption}>
      <img src={props.button} alt={props.name}></img>
    </button>
  );
}

export default MenuButton;
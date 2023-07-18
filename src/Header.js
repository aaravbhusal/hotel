import React from "react";

function Header(props) {
  
  return (
    <>
        <h1>i am header</h1>
        {props.name}
        {props.id}
        {props.hobby}
    </>   
  );
}

export default Header;
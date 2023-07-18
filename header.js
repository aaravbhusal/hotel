import React from "react";

function header(props) {
  return (
    <>
        <h1>i am header</h1>
        {props.name}
        {props.id}
    </>   
  );
}

export default header;
import React from "react";

const Contenedor = (props) => {
  const styleContenedor = {
    width: "200px",
    height: "400px",
    backgroundColor: "black",
    padding: "10px",
    margin: "auto",
  };

  return <div style={styleContenedor}> {props.children} </div>;
};

export default Contenedor;

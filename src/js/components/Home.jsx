import React from "react";
import Color from "./Color";
import Palito from "./Palito";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const styleContenedor = {
    width: "200px",
    height: "400px",
    backgroundColor: "black",
    padding: "10px",
  };

  return (
    <>
      <Palito />
      <Color color="Red" />
      <Color color="Yellow" />
      <Color color="Green" />
    </>
  );
};

export default Home;

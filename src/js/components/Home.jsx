import React from "react";
import Color from "./Color";
import Palito from "./Palito";
import Contenedor from "./Contenedor";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <Palito />
      <Contenedor>
        <Color color="Red" />
        <Color color="Yellow" />
        <Color color="Green" />
      </Contenedor>
    </>
  );
};

export default Home;

import React from "react";
import Color from "./Color";
import Palito from "./Palito";
import Contenedor from "./Contenedor";
import useState from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [focus, setFocus] = useState("Red");
  return (
    <>
      <Palito />
      <Contenedor>
        <Color onClick={() => setFocus("Red")} color="Red" />
        <Color onClick={() => setFocus("Yellow")} color="Yellow" />
        <Color onClick={() => setFocus("Green")} color="Green" />
      </Contenedor>
    </>
  );
};

export default Home;

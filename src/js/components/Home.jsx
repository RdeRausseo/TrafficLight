import React, { useState } from "react";
import Color from "./Color";
import Palito from "./Palito";
import Contenedor from "./Contenedor";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [focus, setFocus] = useState("Red");

  const changeFocus = (focus) => {
    switch (focus) {
      case "Red":
        return "Yellow";
      case "Yellow":
        return "Green";
      case "Green":
        return "Red";
    }
  };
  const styleFocus = {
    boxShadow: "1px 1px 20px 15px rgb(201, 161, 74)",
  };

  return (
    <div className="text-center">
      <Palito />
      <Contenedor>
        <Color
          onClick={() => setFocus("Red")}
          color="Red"
          focus={focus === "Red" ? styleFocus : {}}
        />
        <Color
          onClick={() => setFocus("Yellow")}
          color="Yellow"
          focus={focus === "Yellow" ? styleFocus : {}}
        />
        <Color
          onClick={() => setFocus("Green")}
          color="Green"
          focus={focus === "Green" ? styleFocus : {}}
        />
      </Contenedor>
      <button
        onClick={() => setFocus(changeFocus(focus))}
        className="btn btn-success my-2"
      >
        Change Color
      </button>
    </div>
  );
};

export default Home;

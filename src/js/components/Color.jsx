import React from "react";
import PropTypes from "prop-types";

const Color = ({ color }) => {
  const styles = {
    borderRadius: "100%",
    backgroundColor: color,
    width: "100px",
    height: "100px",
  };

  return <div style={styles}></div>;
};

Color.PropTypes = {
  color: PropTypes.string.isRequired,
};

export default Color;

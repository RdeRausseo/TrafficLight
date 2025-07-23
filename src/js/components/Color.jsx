import React from "react";
import PropTypes from "prop-types";

const Color = ({ color, focus, onClick }) => {
  const styles = {
    borderRadius: "100%",
    backgroundColor: color,
    width: "100px",
    height: "100px",
    margin: "10px auto",
  };

  return <div style={{ ...styles, ...focus }} onClick={onClick}></div>;
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  focus: PropTypes.object,
  onClick: PropTypes.func,
};

export default Color;

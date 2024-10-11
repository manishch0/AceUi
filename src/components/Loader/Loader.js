import React from "react";
import "./loader.css";

const Loader = (props) => {
  const { id } = props;
  return <div id={id} className="loader"></div>;
};

export default Loader;

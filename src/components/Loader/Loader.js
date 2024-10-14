import React from "react";
import "./loader.css";

let sizeInternal = {
  small: "small",
  medium: "medium",
  large: "large",
};

const Loader = (props) => {
  const { id, size = "medium" } = props;
  return (
    <span id={id} class={` ${sizeInternal[size]} loader`}>
      {"  "}
    </span>
  );
};

export default Loader;

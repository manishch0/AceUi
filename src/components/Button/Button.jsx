import React from "react";
import "./button.css";
import Loader from "../Loader/Loader";

let styleInteral = {
  primary: {
    background: "#257180",
    color: "white",
  },
  secondary: {
    background: "#CB6040",
    color: "white",
  },
};

let sizeInternal = {
  small: {
    padding: "10px 20px",
    fontSize: "14px",
  },
  medium: { padding: "12px 18px", fontSize: "18px" },
  large: { padding: "14px 21px", fontSize: "24px" },
};
let defaultStyle = {
  borderRadius: "12px",
  border: "none",
  fontSize: "18px",
  display: "flex",
  gap: 5,
};

function Button(props) {
  const {
    children,
    isLoading = false,
    onClick = () => {},
    style = {},
    type = "primary",
    size = "medium",
  } = props;

  return (
    <>
      <button
        data-testid="button-id"
        style={{
          ...styleInteral[type],
          ...sizeInternal[size],
          ...defaultStyle,
          ...style,
        }}
        id="button-id"
        aria-disabled={"true"}
        onClick={(event) => {
          if (isLoading) {
            return;
          }
          return onClick(event);
        }}
        className="btn"
      >
        {isLoading && (
          <Loader
            size="small"
            data-testid="button-loader"
            id="button-loader"
          ></Loader>
        )}
        {children}
      </button>
    </>
  );
}

export default Button;

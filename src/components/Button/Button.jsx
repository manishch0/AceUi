import React from "react";
import Loader from "../Loader/Loader";
import button from "./tv";

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
        className={button({ size: size, color: type })}
        id="button-id"
        onClick={(event) => {
          if (isLoading) {
            return;
          }
          return onClick(event);
        }}
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

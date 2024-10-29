import React, { forwardRef, memo } from "react";
import Loader from "../Loader/Loader";
import button from "./tv";
import { useButton } from "react-aria";

const Button = forwardRef(function Button(props, ref) {
  let { buttonProps, isPressed } = useButton(props, ref);
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
        {...buttonProps}
        data-testid="button-id"
        className={button({ size: size, color: type, isPressed: isPressed })}
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
});

export default memo(Button);

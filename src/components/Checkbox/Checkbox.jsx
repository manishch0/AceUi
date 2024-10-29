import React, { forwardRef, memo } from "react";
import { useCheckbox, mergeProps, useFocusRing, FocusRing } from "react-aria";
import { useToggleState } from "react-stately";

const Checkbox = function Checkbox(props) {
  let { children } = props;

  let state = useToggleState(props);
  let ref = React.useRef(null);

  let { inputProps } = useCheckbox(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label
      style={{
        display: "span",
        outline: isFocusVisible ? "2px solid Black" : "none",
      }}
    >
      <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      {children}
    </label>
  );
};

export default memo(Checkbox);

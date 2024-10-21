import React, { createContext } from "react";

// Create the context with a default value
export const ToastContext = createContext({
  visible: false,
  title: "apple",
  setToast: () => {}, // Placeholder for the setter function
});

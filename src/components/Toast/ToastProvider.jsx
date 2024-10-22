import { useEffect, useState } from "react";
import ToastMessage from "./ToastMessage";
import { ToastContext } from "./ToastContext";

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    title: "apple",
    type: "",
  });

  return (
    <ToastContext.Provider value={{ ...toast, setToast }}>
      {children}
      {toast.visible && (
        <ToastMessage
          type={toast.type}
          title={toast.title}
          visible={toast.visible}
        ></ToastMessage>
      )}
    </ToastContext.Provider>
  );
};

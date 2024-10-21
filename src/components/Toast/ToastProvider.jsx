import { useEffect, useState } from "react";
import ToastMessage from "./ToastMessage";
import { ToastContext } from "./ToastContext";

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    visible: false,
    title: "apple",
    type: "",
  });

  useEffect(() => {
    if (toast.visible) {
      let timerId = setTimeout(() => {
        setToast({ visible: false, title: "" });
        clearTimeout(timerId);
      }, 1500);
    }
  }, [toast.visible]);

  return (
    <ToastContext.Provider value={{ ...toast, setToast }}>
      {children}
      {toast.visible && (
        <ToastMessage type={toast.type} title={toast.title}></ToastMessage>
      )}
    </ToastContext.Provider>
  );
};

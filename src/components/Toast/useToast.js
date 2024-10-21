import { useContext } from "react";
import { ToastContext } from "./ToastContext";

// Custom hook to use the ToastContext
const useToast = () => {
  const { setToast } = useContext(ToastContext);

  return {
    succeess: ({ title }) => {
      setToast({ title, visible: true, type: "success" });
    },
    error: ({ title }) => {
      setToast({ title, visible: true, type: "error" });
    },
    default: ({ title }) => {
      setToast({ title, visible: true, type: "" });
    },
  };
};
export default useToast;

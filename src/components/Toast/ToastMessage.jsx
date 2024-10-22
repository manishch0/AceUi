import { useContext, useEffect, useRef } from "react";
import { ToastContext } from "./ToastContext";

const ToastMessage = ({ title, type, visible }) => {
  const { setToast } = useContext(ToastContext);
  const hover = useRef(false);
  const timerRef = useRef(null);
  const remainingTime = useRef(3000); // Initially set to 2 seconds (2000ms)
  const startTime = useRef(null); // Store the time when the timeout started

  const startTimer = (time) => {
    clearTimeout(timerRef.current);
    startTime.current = Date.now(); // Capture the current time when starting
    timerRef.current = setTimeout(() => {
      if (!hover.current) {
        setToast({ visible: false, title: "" });
      }
    }, time); // Use the remaining time or full time
  };

  useEffect(() => {
    if (visible) {
      remainingTime.current = 3000; // Reset the remaining time when toast becomes visible
      startTimer(remainingTime.current); // Start the initial 2-second timer
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [visible, setToast]);

  // Handle mouse hover: clear the timer and calculate remaining time
  const handleMouseOver = () => {
    hover.current = true;
    clearTimeout(timerRef.current); // Stop the timer
    const elapsed = Date.now() - startTime.current; // Calculate how much time has passed
    remainingTime.current -= elapsed; // Update remaining time
  };

  // Handle mouse leave: restart the timer with remaining time
  const handleMouseLeave = () => {
    hover.current = false;
    startTimer(remainingTime.current); // Start the timer with the remaining time
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div
        onMouseOver={handleMouseOver} // Stop timer on hover
        onMouseLeave={handleMouseLeave} // Resume with remaining time on leave
        style={{
          background:
            type === "success" ? "green" : type === "error" ? "red" : "gray",
          borderRadius: 10,
          marginTop: 30,
          padding: "5px 15px",
        }}
      >
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ToastMessage;

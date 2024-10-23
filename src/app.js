import React, { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";
import { ToastProvider } from "./components/Toast/ToastProvider";
import useToast from "./components/Toast/useToast";
import Hello from "./Hello";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import "./main.css"

function App() {
  const [value, setValue] = useState(0)

  return (
    // <ToastProvider>
    //   <Hello></Hello>
    // </ToastProvider>
    <>
    <div className="text-yellow-800">Hello</div>
    <p className="bg-red-800">hello 2</p>
      <ProgressBar progress={value} variant={""} />
      <Button onClick={() => {
        setValue(value + 10)
        // 20
      }}>Increase by 10%</Button>
    </>
  );
}

export default App;

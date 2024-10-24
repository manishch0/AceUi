import React, { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";
import { ToastProvider } from "./components/Toast/ToastProvider";
import useToast from "./components/Toast/useToast";
import Hello from "./Hello";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import "./index.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    // <ToastProvider>
    //   <Hello></Hello>
    // </ToastProvider>
    <>
      <p class="text-3xl font-bold underline">Hello world!</p>
      <div className="text-yellow-800">Hello</div>
      <p className="bg-red-800">hello 2</p>
      <ProgressBar progress={value} variant={""} />
      <Button
        type="secondary"
        size="lg"
        onClick={() => {
          setValue(value + 10);
          // 20
        }}
      >
        Increase by 10%
      </Button>
    </>
  );
}

export default App;

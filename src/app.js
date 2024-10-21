import React, { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";
import { ToastProvider } from "./components/Toast/ToastProvider";
import useToast from "./components/Toast/useToast";
import Hello from "./Hello";

function App() {
  return (
    <ToastProvider>
      <Hello></Hello>
    </ToastProvider>
  );
}

export default App;

import React, { useRef, useState } from "react";
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
  const ref = useRef();
  const [check, setCheck] = useState(false);

  return (
    <>
      <h2 class="text-3xl font-bold underline">Hello ACE UI</h2>
      <ProgressBar progress={value} variant={""} />
      <Checkbox
        // isReadOnly={true}
        // isDisabled={true}
        isSelected={check}
        onChange={(vl) => {
          setCheck(vl);
        }}
        // defaultSelected={true}
      >
        hello Checkbox
      </Checkbox>
      <Button
        ref={ref}
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

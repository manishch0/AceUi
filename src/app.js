import React, { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [check, setCheck] = useState(false);
  return (
    <div>
      {/* 
    //   <Checkbox
    //     label={"apple"}
    //     check={check}
    //     onChange={(value) => {
    //       setCheck(value);
    //     }}
    //   />
     */}

      {/* <Button type="secondary">Hello Button</Button> */}
      <Accordion>
        <Accordion.Item key="1" label="Heading 1">
          this is content
        </Accordion.Item>
        <Accordion.Item key="2" label="Heading 2">
          bla blab lab bla
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;

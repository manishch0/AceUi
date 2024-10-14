import React, { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [check, setCheck] = useState(false);
  return (
    // <div>
    //   <Checkbox
    //     label={"apple"}
    //     check={check}
    //     onChange={(value) => {
    //       setCheck(value);
    //     }}
    //   />
    // </div>
    <div>
      {/* <Button type="secondary">Hello Button</Button> */}
      <Accordion
        items={[
          {
            title: "Hello One",
            content: (
              <div>
                <h1>hello h1 title </h1>
              </div>
            ),
          },
          {
            title: "Hello two",
            content: (
              <div>
                <h1>hello h1 title </h1>
              </div>
            ),
          },
          {
            title: "Hello three",
            content: (
              <div>
                <h1>hello h1 title </h1>
              </div>
            ),
          },
        ]}
      ></Accordion>
    </div>
  );
}

export default App;

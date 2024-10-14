import { useState } from "react";
import DownArrow from "./Downarrow";
import UpArrow from "./Uparrow";

const Accordion = (props) => {
  const { visiable, items } = props;
  const [show, setShow] = useState(null);

  return items.map((_, index) => (
    <AccordionItem
      {..._}
      index={index}
      show={index === show ? true : false}
      onToggle={(index) => {
        console.log(index, "this index");
        setShow(index === show ? null : index);
      }}
    ></AccordionItem>
  ));
};

const AccordionItem = (props) => {
  const { visiable, title, content, show, index, onToggle } = props;

  return (
    <div>
      <div onClick={() => onToggle(index)} style={{ display: "flex" }}>
        {title}
        <div>{show ? <UpArrow /> : <DownArrow />}</div>
      </div>
      {show && <div>{content}</div>}
    </div>
  );
};

export default Accordion;

import { Children, cloneElement, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const onToggle = (index) => {
    setActiveIndex((currentIndex) => {
      return index === currentIndex ? null : index;
    });
  };

  const mappedChildren = Children.map(children, (child, index) =>
    cloneElement(child, {
      onToggle: onToggle,
      show: index === activeIndex,
      index,
    })
  );

  return <div>{mappedChildren}</div>;
};

Accordion.Item = AccordionItem;
export default Accordion;

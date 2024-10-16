import DownArrow from "./Downarrow";
import UpArrow from "./Uparrow";
const AccordionItem = (props) => {
  const { label, children, show, index, onToggle } = props;

  return (
    <div>
      <div onClick={() => onToggle(index)} style={{ display: "flex" }}>
        {label}
        <div>{show ? <UpArrow /> : <DownArrow />}</div>
      </div>
      {show && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;

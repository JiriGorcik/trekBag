import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ handleAddItem }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert(`Item can not be empty`);
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;

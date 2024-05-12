import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;

import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark All as Complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark All as Incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to Initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove All Items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          buttonType="secondary"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;

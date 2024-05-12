import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Item from "./Item";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

const ItemList = () => {
  const [sortBy, setSortBy] = useState("default");

  const items = useItemsStore((state) => state.items);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const deleteItem = useItemsStore((state) => state.deleteItem);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          item={item}
          key={item.id}
          handleDeleteItem={deleteItem}
          handleToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;

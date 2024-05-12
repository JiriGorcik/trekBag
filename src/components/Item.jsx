import React from "react";

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  const { id, name, packed } = item;

  return (
    <li className="item">
      <label>
        <input
          checked={packed}
          type="checkbox"
          onChange={() => handleToggleItem(id)}
        />
        {name}
      </label>

      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;

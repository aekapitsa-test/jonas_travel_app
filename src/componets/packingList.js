import Item from "./item";
import { useState } from "react";

function PackingList({ items, onDeleteItem, onToggleItem, onDeleteAllItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  // remake using switch / case / default

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul className="list-">
        {sortedItems.map((el) => {
          return (
            <Item
              key={el.id}
              item={el}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onDeleteAllItems()}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;

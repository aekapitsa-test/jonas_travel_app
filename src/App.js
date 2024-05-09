import Logo from "./componets/logo";
import Form from "./componets/form";
import PackingList from "./componets/packingList";
import Stats from "./componets/stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleSetItem(item) {
    setItems((itemsArr) => [...itemsArr, item]);
  }

  function handleDeleteItem(id) {
    setItems((itemsArr) => {
      return itemsArr.filter((el) => el.id !== id);
    });
  }

  function handleToggleItem(id) {
    setItems((curItems) => {
      return curItems.map((el) => {
        return el.id === id ? { ...el, packed: !el.packed } : el;
      });
    });
  }

  function handleDeleteAllItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onSetItem={handleSetItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

import { useState } from "react";

function Form({ onSetItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantityOfThings] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onSetItem(newItem);

    setDescription("");
    setQuantityOfThings(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for a trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => {
          setQuantityOfThings(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

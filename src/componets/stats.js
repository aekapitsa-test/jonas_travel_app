function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Please start to collect you baggage...</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((el) => el.packed).length;
  const percentageOfPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentageOfPacked === 100
          ? "You got everything! Ready to go!"
          : `You have ${numItems} items in your list, and you already packed ${numPacked} (${percentageOfPacked}%).`}
      </em>
    </footer>
  );
}

export default Stats;

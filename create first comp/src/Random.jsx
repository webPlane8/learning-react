function Random() {
  let number = Math.random() * 100;

  return (
    <h3 style={{ "background-color": "#999991" }}>
      Random number is {Math.round(number)}
    </h3>
  );
}

export default Random;

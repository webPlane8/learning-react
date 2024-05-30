const ErrorMsg = (props) => {
  // let foodItems = ["Meat", "Milk", "Fruits", "Vegetables", "Beans and Lentils"];
  return <>{props.itm.length === 0 && <h3>I am still hungry.</h3>}</>;
};
export default ErrorMsg;

import Item from "./Item";
const FoodItem = (props) => {
  // let foodItems = ["Meat", "Milk", "Fruits", "Vegetables", "Beans and Lentils"];
  //   let foodItems = [];
  return (
    <ul className="list-group">
      {props.itm.map((item) => (
        <Item key={item} fooditm={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItem;

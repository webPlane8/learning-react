import { useState } from "react";
import Item from "./Item";
const FoodItem = ({ itm }) => {
  let [activeItems, setactiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    // console.log(onBuyButton);
    let newItems = [...activeItems, item];
    console.log(item);
    console.log(newItems);

    setactiveItems(newItems);
    console.log(activeItems);
  };

  return (
    <ul className="list-group">
      {itm.map((item) => (
        <Item
          key={item}
          fooditm={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
          // handleBuyButton={()=> console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItem;

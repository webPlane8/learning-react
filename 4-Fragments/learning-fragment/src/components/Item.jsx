import styles from "./Item.module.css";
const Item = (props) => {
  return (
    <li className={`${styles["food_itm"]}`}>
      <span className={`${styles["span_itm"]}`}>{props.fooditm}</span>
    </li>
  );
};
export default Item;

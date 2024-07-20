import styles from "./Item.module.css";
const Item = ({ fooditm, handleBuyButton, bought }) => {
  // const handlerClcik = (event) => {
  //   console.log(event);
  //   console.log(`${props.fooditm} was bought`);
  // };

  return (
    <li
      className={`${styles["food_itm"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["span_itm"]}>{fooditm}</span>
      <button
        className={`${styles.buy_btn} btn btn-danger`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;

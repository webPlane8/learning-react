import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Please Enter Food item"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;

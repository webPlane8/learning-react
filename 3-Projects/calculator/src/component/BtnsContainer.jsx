import styles from "./BtnsContainer.module.css";
const BtnsContainer = () => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnNames.map((btn) => (
        <button className={styles.btn}>{btn}</button>
      ))}
    </div>
  );
};
export default BtnsContainer;

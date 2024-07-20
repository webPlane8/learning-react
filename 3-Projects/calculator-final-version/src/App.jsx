import styles from "./App.module.css";
import Display from "./component/Display";
import BtnsContainer from "./component/BtnsContainer";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState([]);

  const onButtonClick = (textName) => {
    if (textName === "C") {
      setCalValue("");
    } else if (textName === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newCalValue = calValue + textName;
      setCalValue(newCalValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue}></Display>
      <BtnsContainer onButtonClick={onButtonClick}></BtnsContainer>
    </div>
  );
}

export default App;

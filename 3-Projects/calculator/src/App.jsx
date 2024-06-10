import styles from "./App.module.css";
import Display from "./component/Display";
import BtnsContainer from "./component/BtnsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <BtnsContainer></BtnsContainer>
    </div>
  );
}

export default App;

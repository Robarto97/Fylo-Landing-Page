import { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./styles.scss";

function App() {
  const inputRef1 = useRef("");
  const inputRef2 = useRef("");
  const [showFirstError, setShowFirstError] = useState(false);
  const [showSecondError, setShowSecondError] = useState(false);

  const handleClick1 = () => {
    const currValue = inputRef1.current.value;
    console.log(currValue);
    const regex = /^\w+([\.-_]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/g;
    if (currValue === "" || currValue === null || !currValue.match(regex)) {
      setShowFirstError(true);
    } else {
      setShowFirstError(false);
      inputRef1.current.value = "";
    }
  };
  const handleClick2 = () => {
    const currValue = inputRef2.current.value;
    const regex = /^\w+([\.-_]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/g;
    if (currValue === "" || currValue === null || !currValue.match(regex)) {
      setShowSecondError(true);
    } else {
      setShowSecondError(false);
      inputRef2.current.value = "";
    }
  };
  return (
    <>
      <Header
        handleClick1={handleClick1}
        inputRef1={inputRef1}
        showFirstError={showFirstError}
      />
      <Main
        inputRef2={inputRef2}
        handleClick2={handleClick2}
        showSecondError={showSecondError}
      />
      <Footer />
    </>
  );
}

export default App;

import Title from "./components/Title";
import Fin from "./components/Finance";
import FormComp from "./components/FormComponents";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const onAddNewList = (newList) => {
    setList((prevList) => {
      return [newList, ...prevList];
    });
  };
  return (
    <div className="container">
      <Title />
      <FormComp onAddList={onAddNewList} />
      <Fin dataList={list} />
    </div>
  );
}

export default App;

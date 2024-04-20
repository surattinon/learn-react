import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FormComponents.css";

const FormComp = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputPrice = (event) => {
    setPrice(event.target.value);
  };

  const saveList = (event) => {
    event.preventDefault();
    const listData = {
      id: uuidv4(),
      title: title,
      price: Number(price),
    };
    props.onAddList(listData);
    setTitle("");
    setPrice(0);
  };

  return (
    <div>
      <form onSubmit={saveList}>
        <div className="form-control">
          <label>Catagory</label>
          <input
            type="text"
            placeholder="Catagory Name"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>Cost</label>
          <input
            type="number"
            placeholder="Enter the cost"
            onChange={inputPrice}
            value={price}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComp;

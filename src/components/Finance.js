import "./Finance.css";
import FinList from "./FinList";

function Fin(props) {
  const { dataList } = props;
  return (
    <>
      <p>List of Financial</p>
      <ul className="list-comp">
        {dataList.map((list) => {
          return <FinList {...list} key={list.id} />;
        })}
      </ul>
    </>
  );
}

export default Fin;

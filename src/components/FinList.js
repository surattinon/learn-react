import PropTypes from "prop-types";

function FinList(props) {
  const { title, price } = props;
  return (
    <>
      <li>
        {title} <span>${price}</span>
      </li>
    </>
  );
}

FinList.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FinList;

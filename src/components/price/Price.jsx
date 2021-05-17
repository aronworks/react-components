import PropTypes from "prop-types";

const currencyLocalMapping = {
  USD: "en-US",
  INR: "en-IN",
  EUR: "en-US",
};

const Price = ({ currency, isStriked, children }) => {
  return (
    <span style={isStriked ? {textDecoration:"line-through"}:{}}>
     {new Intl.NumberFormat(currencyLocalMapping[currency], { style: 'currency', currency }).format(children)}
    </span>
  );
};

const currencyEnum = Object.keys(currencyLocalMapping);

Price.propTypes = {
    currency: PropTypes.oneOf(currencyEnum).isRequired,
    children: PropTypes.string.isRequired,
};

export default Price;

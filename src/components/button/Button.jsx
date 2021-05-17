import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, size, type, disabled, processing, onClick }) => {
  const checkDisabled = disabled ? "btn-disabled" : "";
  const checkProcessing = processing ? "btn-processing" : "";
  const className = `btn btn-${size} ${checkDisabled} ${checkProcessing}`;

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "base", "lg"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

Button.defaultProps = {
  type: "button",
  size: "base",
};

export default Button;

import PropTypes from "prop-types";
import "./button.css";

const Button = ({
  children,
  color,
  size,
  variant,
  type,
  disabled,
  processing,
  onClick,
}) => {
  const checkDisabled = disabled ? "btn-disabled" : "";
  const checkProcessing = processing ? "btn-processing" : "";

  const className = `btn btn-${color}-${variant} btn-${size} ${checkDisabled} ${checkProcessing}`;

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "base", "lg"]),
  type: PropTypes.string,
  variant: PropTypes.oneOf(["text", "solid", "outline"]),
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  children: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.element
    ]
  ).isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: "button",
  color: "primary",
  variant: "text",
  size: "base"
}


export default Button;

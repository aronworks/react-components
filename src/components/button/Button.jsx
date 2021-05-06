import "./button.css";

const COLORS = ["primary", "secondary"];
const VARIANTS = ["text", "solid", "outline"];
const SIZES = ["sm", "base", "lg"];

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
  const checkColor = COLORS.includes(color) ? color : COLORS[0];
  const checkVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const checkSize = SIZES.includes(size) ? size : SIZES[1];

  const checkDisabled = disabled ? "btn-disabled" : "";
  const checkProcessing = processing ? "btn-processing" : "";

  const className = `btn btn-${checkColor}-${checkVariant} btn-${checkSize} ${checkDisabled} ${checkProcessing} `;

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

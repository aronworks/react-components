import React from "react";
import "./button.css";

const STYLES = ["btn-primary-solid", "btn-primary-outline"];

const SIZES = ["btn-small", "btn-medium", "btn-large"];

const Button = ({ children, buttonStyle, buttonSize, type, onClick }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[2];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

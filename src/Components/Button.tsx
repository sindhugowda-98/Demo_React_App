import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  className = "button button-primary",
}) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {label} <span aria-hidden="true">→</span>
  </button>
);

export default Button;

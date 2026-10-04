import React from "react";

interface InputProps {
  id: string;
  name?: string;
  value: string;
  type?: "text" | "password" | "email";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  type = "text",
  onChange,
  placeholder,
  autoComplete,
  required = false,
}) => (
  <input
    id={id}
    name={name ?? id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    autoComplete={autoComplete}
    required={required}
  />
);

export default Input;

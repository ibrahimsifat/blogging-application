import React from "react";
import tw from "tailwind-styled-components";

// input
const Input = tw.input`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-indigo-300`;

// label
export const InputLabel = tw.label`block mb-2 text-sm text-gray-400`;
const InputContainer = tw.div`mb-6 relative`;
const ErrorMessage = tw.small`text-red-500 `;
const InputGroup = ({
  type,
  name,
  placeholder,
  id,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
}) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputGroup;

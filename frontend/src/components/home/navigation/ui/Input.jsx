import React from "react";
import tw from "tailwind-styled-components";

// input
const Input = tw.input`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-indigo-300`;

// label
const InputLabel = tw.label`block mb-2 text-sm text-gray-400`;
const InputContainer = tw.div`mb-6 relative`;

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
      <InputLabel for={id}>{label}</InputLabel>
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

      {error && <HelperText valid={false}>{error}</HelperText>}
    </InputContainer>
  );
};

export default InputGroup;

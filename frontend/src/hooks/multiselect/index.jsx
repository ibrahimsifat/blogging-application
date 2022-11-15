import React from "react";
import ReactSelect from "react-select";
import { InputLabel } from "../../components/shared/input/Input";
// select categories and tags
const MultiSelect = ({ setField, selectOption, id, label, defaultValue }) => {
  const handleCategorySelect = (newValue) => {
    const reduceValue = newValue?.map((value) => value?.value);
    setField([...reduceValue]);
  };
  return (
    <div>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <ReactSelect
        defaultValue={defaultValue ? defaultValue : []}
        required
        isMulti
        id={id}
        name="category"
        options={selectOption}
        className="my-react-select-container"
        classNamePrefix="my-react-select"
        onChange={handleCategorySelect}
      />
    </div>
  );
};

export default MultiSelect;

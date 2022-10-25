import { useState } from "react";
import { deepClone, isObjEmpty } from "../utils/object-utils";

/**
 * @typedef {Object} param
 * @property {Object} init
 * @property {Object | boolean} validate}
 *
 * create forms using this useForm hook easily
 * @param {param} param
 * @returns
 */
const UseForm = ({ init, validate }) => {
  const [state, setStates] = useState(mapValuesToState(init));
  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const oldState = deepClone(state);

    if (type === "checkbox") {
      oldState[key].value = checked;
    } else {
      oldState[key].value = value;
    }

    const { errors } = getErrors();
    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setStates(oldState);
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }
    setStates(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = getErrors();
    const oldState = deepClone(state);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    oldState[key].focused = false;
    setStates(oldState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const { hasError, errors, values } = getErrors();
    cb({
      hasError,
      errors,
      values,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
  };
  const clear = () => {
    const newState = mapValuesToState(init, true);
    setStates(newState);
  };
  const getErrors = () => {
    let hasError = null,
      errors = null;
    const values = mapStateToKeys(state, "value");

    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorFromCB = validate(values);
      hasError = !isObjEmpty(errorFromCB);
      errors = errorFromCB;
    } else {
      throw new Error("validate property must ve boolean or function");
    }
    return {
      values,
      errors,
      hasError,
    };
  };
  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

// helper function
const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: shouldClear ? "" : values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};
const mapStateToKeys = (states, key) => {
  return Object.keys(states).reduce((acc, cur) => {
    acc[cur] = states[cur][key];
    return acc;
  }, {});
};

export default UseForm;

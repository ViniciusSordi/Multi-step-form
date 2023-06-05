import React from "react";
import "../Css/Input.css";

const Input = ({ id, setValue, error, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
      <div className="error-message">{error.visible ? error.message : ""}</div>
    </div>
  );
};

export default Input;

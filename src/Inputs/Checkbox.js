import React from "react";
import { useSelector } from "react-redux";
import "../Css/Checkbox.css";
import { updateAddOns } from "../reducers/plan";

const Checkbox = ({ options, value, setValue, toggle, addons }) => {
  const year = useSelector((state) => {
    const duration = state.plan.duration;
    return duration.includes("Yearly");
  });

  function handleChange({target}) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(Array.from(value).filter((i) => i !== target.value));
    }
  }

  function handleChangeAddOns(e) {
    const target = e.target;
    const wrapperDiv = e.target.parentNode;
    target.checked ? wrapperDiv.classList.add('checked') : wrapperDiv.classList.remove('checked');
    if (target.checked) {
      const selectedOption = options.find((option) => option.name === target.value);
      setValue([...value, selectedOption]);
    } else {
      setValue(value.filter((option) => option.name !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option.name ? option.name : option}>
          <div className={addons ? "addons-wrapper" : ""}>
            <input
              type="checkbox"
              value={option.name ? option.name : option}
              checked={addons ? value.some((addon) => addon.name === option.name) : value.includes(option)}
              onChange={addons ? handleChangeAddOns : handleChange}
            />
            {<div className={toggle ? "toggle" : "custom-checkbox"}></div>}

            {option.name ? (
              <>
                <div className="option-text">
                  <h1>{option.name}</h1>
                  <p>{option.subtitle}</p>
                </div>
                <p className="addons-price">+${year ? option.price * 10 + "/yr": option.price + "/mo"}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </label>
      ))}
    </>
  );
};

export default Checkbox;

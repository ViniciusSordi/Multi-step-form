import React from "react";
import { useSelector } from "react-redux";
import "../Css/Radio.css"

const Radio = ({ options, value, setValue, ...props }) => {
  
  const year = useSelector((state) => {
    const duration = state.plan.duration;
    return duration.includes("Yearly");
  });

  return (
    <>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          <div
            className={`radio-container ${
              value === option.value ? "active" : ""
            }`}
          >
            <img src={option.image} alt={option.value} />
            <div className="radio-text">
              <h1>{option.value}</h1>
              <p>
                ${year ? option.price * 10 : option.price}
                {year ? "/yr" : "/mo"}
              </p>
              <p id="primary" style={{ opacity: year ? 1 : 0 }}>2 months free</p>
            </div>
          </div>
        </label>
      ))}
    </>
  );
};

export default Radio;

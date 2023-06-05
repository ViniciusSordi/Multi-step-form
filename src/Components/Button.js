import React from "react";
import "../Css/Buttons.css";
import { previousPage, nextPage } from "../reducers/page";
import { useDispatch } from "react-redux";

const Button = ({ btnClass, backBtn, handleNext, nextText }) => {
  const dispatch = useDispatch();
  const containerClass = `${btnClass} buttons-container`;

  function defaultNext() {
    dispatch(nextPage());
  }

  function handleBack() {
    dispatch(previousPage());
  }

  return (
    <div className={containerClass}>
      {backBtn ? (
        <span className="back-btn" onClick={handleBack}>
          Go Back
        </span>
      ) : (
        ""
      )}
      <button
        className="next-btn"
        onClick={handleNext ? handleNext : defaultNext}
      >
        {nextText ? nextText : "Next Step"}
      </button>
    </div>
  );
};

export default Button;

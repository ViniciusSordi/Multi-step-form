import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const steps = [
    {
      number: 1,
      text: "Your Info",
    },
    {
      number: 2,
      text: "Select Plan",
      active: false,
    },
    {
      number: 3,
      text: "Add-Ons",
      active: false,
    },
    {
      number: 4,
      text: "Summary",
      active: false,
    },
  ];
  const page = useSelector((state) => {
    return state.page;
  });
  return (
    <section className="left-section">
      {steps.map((item) => (
        <div className="steps-wrapper" key={item.number}>
          <div
            className={`number-circle ${page === item.number ? "active" : ""}`}
          >
            {item.number}
          </div>
          <div className="step-text">
            <p>Step {item.number}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SideBar;

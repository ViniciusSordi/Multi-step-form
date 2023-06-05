import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, customPage } from "../reducers/page";
import Button from "../Components/Button";

const PageFour = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const addOns = useSelector((state) => state.plan.addOns);

  const year = useSelector((state) => {
    const duration = state.plan.duration;
    return duration.includes("Yearly");
  });

  const time = year ? "/yr" : "/mo";

  function getTotalPrice() {
    let total = 0;
    addOns.forEach((i) => {
      total += i.price;
    });
    total += plan.price;
    if (year) {
      return total * 10;
    } else {
      return total;
    }
  }

  const tPrice = getTotalPrice();

  function handleChangePage() {
    dispatch(customPage(2));
  }

  function handleNext() {
    dispatch(nextPage());
  }

  return (
    <section className="right-section">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="summary-container">
        <div className="plan-summary">
          <div>
            <p className="primary-bold">
              {plan.name} ({plan.duration})
            </p>
            <p className="change-link" onClick={handleChangePage}>
              Change
            </p>
          </div>
          <p className="primary-bold">
            ${year ? plan.price * 10 : plan.price}
            {time}
          </p>
        </div>

        {addOns.map((i) => (
          <div className="addOns-summary" key={i.name}>
            <p>{i.name} </p>
            <p>
              +{year ? i.price * 10 : i.price}
              {time}
            </p>
          </div>
        ))}
      </div>

      <div className="total-price">
        <p>Total (per {year ? "year" : "month"})</p>
        <p>
          +${tPrice}
          {time}
        </p>
      </div>

      <Button backBtn={true} nextText={"Confirm"} handleNext={handleNext} />
    </section>
  );
};

export default PageFour;

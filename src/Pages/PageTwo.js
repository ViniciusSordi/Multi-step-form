import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePlan, updatePrice, updateDuration } from "../reducers/plan.js";
import Radio from "../Inputs/Radio";
import Button from "../Components/Button.js";
import Checkbox from "../Inputs/Checkbox.js";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { nextPage } from "../reducers/page";

const PageTwo = () => {
  const options = [
    { value: "Arcade", price: 9, image: arcade },
    { value: "Advanced", price: 12, image: advanced },
    { value: "Pro", price: 15, image: pro },
  ];

  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const selectedOption = plan.name;

  const handleOptionChange = (selectedValue) => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      dispatch(updatePlan(selectedOption.value));
      dispatch(updatePrice(selectedOption.price));
    }
  };

  function handleNext() {
    if (selectedOption) {
      dispatch(nextPage());
    }
  }

  const [duration, setDuration] = React.useState(
    plan.duration ? plan.duration : plan
  );
  const year = duration.includes("Yearly");

  React.useEffect(() => {
    if (year) {
      dispatch(updateDuration("Yearly"));
    } else {
      dispatch(updateDuration("Monthly"));
    }
  }, [duration]);

  return (
    <section className="right-section">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing. </p>

      <form
        className="radio-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Radio
          options={options}
          value={selectedOption}
          setValue={handleOptionChange}
        />
        <div className="duration-container">
          <p className={year ? "" : "active"}>Monthly</p>
          <Checkbox
            options={["Yearly"]}
            value={duration}
            setValue={setDuration}
            toggle="Yes"
          />
          <p className={year ? "active" : ""}>Yearly</p>
        </div>
        <Button backBtn="true" handleNext={handleNext} />
      </form>
    </section>
  );
};

export default PageTwo;

import React from "react";
import Checkbox from "../Inputs/Checkbox.js";
import { useDispatch, useSelector } from "react-redux";
import { updateAddOns } from "../reducers/plan.js";
import Button from "../Components/Button.js";
import { nextPage } from "../reducers/page.js";

const PageThree = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const options = [
    {
      name: "Online Service",
      subtitle: "Acess to multiplayer games",
      price: 1,
    },
    {
      name: "Larger Storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      name: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
  ];
  const [addons, setAddons] = React.useState(plan.addOns ? plan.addOns : []);

  React.useEffect(() => {
    dispatch(updateAddOns(addons));
  }, [addons]);

  function handleNext() {
    dispatch(nextPage());
  }

  return (
    <section className="right-section">
      <h1>Pick add-ons</h1>
      <p style={{ marginBottom: "40px" }}>
        Add-ons help enhance your gaming experience.{" "}
      </p>
      <Checkbox
        options={options}
        value={addons}
        setValue={setAddons}
        addons={true}
      />

      <Button backBtn={true} handleNext={handleNext} />
    </section>
  );
};

export default PageThree;

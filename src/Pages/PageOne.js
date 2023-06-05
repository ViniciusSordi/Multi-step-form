import React from "react";
import "../Css/Pages.css";
import Input from "../Inputs/Input";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../reducers/page";
import { updateName, updateEmail, updatePhone } from "../reducers/user";

const PageOne = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [name, setName] = React.useState(user.name ? user.name : "");
  const [nameError, setNameError] = React.useState({
    visible: false,
    message: "",
  });
  const [email, setEmail] = React.useState(user.email ? user.email : "");
  const [emailError, setEmailError] = React.useState({
    visible: false,
    message: "",
  });
  const [phone, setPhone] = React.useState(user.phone ? user.phone : "");
  const [phoneError, setPhoneError] = React.useState({
    visible: false,
    message: "",
  });

  function validateInput(value, setError) {
    if (value.length >= 1) {
      setError({ visible: true, message: "" });
      return false;
    } else {
      setError({ visible: true, message: "This field is required" });
      return true;
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validEmail = re.test(email);
    if (validEmail) {
      setEmailError({ visible: true, message: "" });
      return false;
    } else {
      setEmailError({ visible: true, message: "Enter a valid email" });
      return true;
    }
  }

  function handleForm() {
    const errorName = validateInput(name, setNameError);
    const errorPhone = validateInput(phone, setPhoneError);
    const errorEmail = validateEmail(email);
    if (!errorName && !errorPhone && !errorEmail) {
      dispatch(updateName(name));
      dispatch(updateEmail(email));
      dispatch(updatePhone(phone));
      dispatch(nextPage());
    }
  }

  return (
    <section className="right-section">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number. </p>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          id="Name"
          placeholder="e.g. Stephen King"
          value={name}
          setValue={setName}
          error={nameError}
          required
        />
        <Input
          id="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          setValue={setEmail}
          error={emailError}
          required
        />
        <Input
          id="Phone Number"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          setValue={setPhone}
          error={phoneError}
          required
        />

        <Button btnClass="end" handleNext={handleForm} />
      </form>
    </section>
  );
};

export default PageOne;

import React from "react";
import thank from "../images/icon-thank-you.svg";

const PageFive = () => {
  return (
    <section className="right-section confirm-section">
      <img src={thank} alt="thank you icon" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.{" "}
      </p>
    </section>
  );
};

export default PageFive;

import React from "react";
import SideBar from "./Components/SideBar";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import PageFour from "./Pages/PageFour";
import PageFive from "./Pages/PageFive";
import { useSelector } from "react-redux";
import "./Css/global.css";

const App = () => {
  const page = useSelector((state) => {
    return state.page;
  });

  const pages = [
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />,
  ];

  return (
    <main>
      <div className="main-container">
        <SideBar />
        {pages[page - 1]}
      </div>
    </main>
  );
};

export default App;

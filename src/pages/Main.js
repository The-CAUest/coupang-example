import React from "react";
import ImgSlider from "../components/ImgSlider";
import TopBar from "../components/TopBar";

const Main = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <TopBar />
    <ImgSlider width={1920} height={"30px"} />
  </div>
);

export default Main;

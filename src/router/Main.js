import React from "react";
import WraplifyAuthenticator from "../components/auth/WraplifyAuthenticator";
import ProductCreate from "../components/crudl/ProductCreate";
import ImgSlider from "../components/ImgSlider";
import Recommand from "../components/Recommand";
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
    <WraplifyAuthenticator />
    <TopBar />
    <ImgSlider width={1920} height={450} />
    <Recommand />
    {/* <ProductCreate
      inputColumn={[
        "name",
        "description",
        "price",
        "categoryID",
        "img_imageUrl",
      ]}
    /> */}
  </div>
);

export default Main;

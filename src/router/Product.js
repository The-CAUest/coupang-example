import React from "react";
import { useParams } from "react-router";
import CoupangProductRead from "../components/CoupangProductRead";
import TopBar from "../components/TopBar";

function Product() {
  const { productID } = useParams();

  return (
    <div
      className="mycoupang"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopBar />
      <div style={styles.contents}>
        <CoupangProductRead
          id={productID}
          showList={["img_imageUrl", "name", "price", "img_descImage"]}
        />
      </div>
    </div>
  );
}

const styles = {
  contents: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0 0 0",
  },
};

export default Product;

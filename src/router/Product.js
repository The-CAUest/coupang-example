import React from "react";
import CoupangProductRead from "../components/CoupangProductRead";
import TopBar from "../components/TopBar";

function Product() {
  return (
    <div
      class="mycoupang"
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
          id={"6609d7c2-dfb2-4212-9ed7-d4a8e502ebe3"}
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
  }
};

export default Product;

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
          id={"f87438c8-b7d3-4e98-8bd5-d7822778017f"}
          showList={["img_imageUrl", "name", "price"]}
          style={styles.readcomp}
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
  readcomp: {
    // margin: '1px auto 50px',
    // padding: '5px 0 0 70px'
  },
};

export default Product;

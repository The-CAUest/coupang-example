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
          id={"5928b725-b7aa-49e0-97bb-a554c8465141"}
          showList={["img_imageUrl", "name", "price", "img_descImage"]}
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

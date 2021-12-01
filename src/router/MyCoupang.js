import React, { useEffect, useState } from "react";
import ProductList from "../components/crudl/ProductList";
import RegisProduct from "../components/RegisProduct";
import ProductDelete from "../components/crudl/ProductDelete";
import Product from "../classes/crudl/Product";
import UpdateProductModal from "../components/UpdateProductModal";
import TopBar from "../components/TopBar";

function MyCoupang() {
  const [id, setID] = useState([]);

  useEffect(() => {
    Product.listProduct().then((data) => {
      let temp_id = [];
      for (let i = 0; i < data.length; i++) {
        temp_id.push(data[i].id);
      }
      setID(temp_id);
    });
  }, []);

  if (!id) {
    return null;
  }

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

      <section class="contentsMyCoupang" style={styles.contentsMyCoupang}>
        <RegisProduct />
        <div class="tableContent" style={styles.tableContent}>
          <h3 style={styles.tableTop}>등록된 상품 정보</h3>
          <div style={{ display: "flex" }}>
            <ProductList
              showList={["img_imageUrl", "name", "price"]}
              style={styles.listcomp}
            />
            <div>
              {id.map((elem) => (
                <ProductDelete id={elem} style={styles.deleteBtn} />
              ))}
            </div>
            <div style={styles.btn}>
              {id.map((elem) => (
                <UpdateProductModal id={elem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  coupang: {
    display: "block",
    width: "140px",
  },
  contentsMyCoupang: {
    width: "1010px",
  },
  productList: {
    marginTop: "30px",
  },
  listcomp: {
    width: "900px",
    justifyContent: "center",
  },
  tableTop: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#EBEBEB",
    marginTop: 30,
    paddingTop: "5px",
  },
  tableContent: {
    fontSize: "14px",
    verticalAlign: "middle",
  },
  deleteBtn: {
    height: "90px",
    margin: "0px 0 0 10px",
    padding: "25px 0 0 0",
  },
  updateBtn: {
    height: "30px",
    margin: "25px 0 27px 10px",
  },
  btn: {
    height: "200px",
  },
};

export default MyCoupang;

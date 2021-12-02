import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import ProductList from "../components/crudl/ProductList";
import Product from "../classes/crudl/Product";
import Cart from "../classes/crudl/Cart";
import { useNavigate } from "react-router";
import CartList from "../components/crudl/CartList";
import CartCreate from "../components/crudl/CartCreate";
import ProductRead from "../components/crudl/ProductRead";

function MyCart() {
  const [totalPrice, setPrice] = useState(0);
  const [id, setId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let total_price = 0;
    let temp_id = [];
    Cart.listCart().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (!data[i].Product?.id) {
          continue;
        }
        temp_id.push(data[i].Product?.id);
        setPrice(total_price + data[i].Product?.price);
      }
      setId(temp_id);
    });
  });

  return (
    <div style={{ backgroundColor: "#EBEBEB" }}>
      <header style={styles.header}>
        <a href="/">
          <img
            alt="coupang"
            style={styles.coupang}
            src={
              "https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"
            }
          />
        </a>
      </header>
      <section style={styles.contentsCart}>
        <section>
          <ShoppingCartOutlined style={styles.cartIcon} />
          <h1 style={styles.h1}>장바구니</h1>
        </section>

        <div class="tableContent" style={styles.tableContent}>
          <div style={styles.tableTop}>
            <h4>전체 상품</h4>
            <h4>상품 정보</h4>
            <h4>상품 금액</h4>
          </div>
          {id.map((elem) => (
            <ProductRead
              id={elem}
              showList={["img_imageUrl", "name", "price"]}
              style={styles.readcomp}
            />
          ))}
          <div class="cartTotalPrice" style={styles.cartTotalPrice}>
            <div style={styles.text}>
              <h3 class="h" style={styles.h}>
                총 상품가격
              </h3>
              <b class="finalPrice" style={styles.finalPrice}>
                {totalPrice}
              </b>
              <h3 class="h" style={styles.h}>
                원
              </h3>
              <b class="h" style={styles.h}>
                +
              </b>
              <h3 class="h" style={styles.h}>
                총 배송비
              </h3>
              <b class="finalPrice" style={styles.finalPrice}>
                0
              </b>
              <h3 class="h" style={styles.h}>
                원
              </h3>
              <b class="h" style={styles.h}>
                =
              </b>
              <h3 class="h" style={styles.h}>
                총 주문금액
              </h3>
              <strong style={{ color: "red", fontSize: "1.2em" }}>
                {totalPrice}원
              </strong>
            </div>
          </div>
          <div
            class="order-buttons"
            style={{ marginTop: "30px", textAlign: "center" }}
          >
            <Button
              id="button"
              style={styles.button}
              type="primary"
              onClick={() => navigate("/")}
              ghost
            >
              계속 쇼핑하기
            </Button>
            <Button id="button" style={styles.button} type="primary">
              구매하기
            </Button>
          </div>
        </div>
      </section>
      <footer style={{ textAlign: "center" }}>
        <h3>Wraplify</h3>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    width: "1010px",
    margin: "0 auto 10px",
  },
  coupang: {
    display: "block",
    width: "140px",
    padding: "20px 0 10px",
  },
  contentsCart: {
    width: "1010px",
    border: "1px solid #e0e0e0",
    margin: "10px auto 70px",
    padding: "40px 39px",
    backgroundColor: "#fff",
  },
  cartTitle: {
    height: "45px",
    paddingBottom: "32px",
    fontSize: "16px",
  },
  cartIcon: {
    float: "left",
    marginRight: 10,
    marginTop: 3,
    fontSize: "40px",
  },
  h1: {
    fontSize: 30,
  },
  tableContent: {
    fontSize: "14px",
    verticalAlign: "middle",
  },
  tableTop: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#EBEBEB",
    marginTop: 20,
    padding: "5px 20px 0px 20px",
  },
  cartTotalPrice: {
    border: "4px solid #c8c8c8",
    padding: "20px 15px 18px",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    fontSize: 14,
  },
  h: {
    marginRight: "10px",
  },
  finalPrice: {
    marginRight: "10px",
    fontSize: "1.2em",
  },
  button: {
    width: "140px",
    height: "55px",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "0px 30px 0px 0px",
  },
  list: {
    width: "100%",
    marginBottom: "30px",
  },
  readcomp: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    padding: "7px 0px 0px 5px",
  },
};

export default MyCart;

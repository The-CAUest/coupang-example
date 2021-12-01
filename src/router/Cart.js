import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import ProductList from "../components/crudl/ProductList";
import Product from "../classes/crudl/Product";

function Cart() {
  const [totalPrice, setPrice] = useState(0);

  useEffect(() => {
    let total_price = 0;
    Product.listProduct().then((data) => {
      for (let i = 0; i < data.length; i++) {
        total_price += data[i].price;
      }
      setPrice(total_price);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#EBEBEB" }}>
      <header>
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
      <section class="contentsCart" style={styles.contentsCart}>
        <section class="cart-title">
          <ShoppingCartOutlined style={styles.cartIcon} />
          <h1>장바구니</h1>
        </section>

        <div class="tableContent" style={styles.tableContent}>
          <div style={styles.tableTop}>
            <h4>전체 상품</h4>
            <h4>상품 정보</h4>
            <h4>상품 금액</h4>
            <h4>배송비</h4>
          </div>
          <ProductList
            showList={["img_imageUrl", "name", "price"]}
            style={styles.list}
          />
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
            <Button id="button" style={styles.button} type="primary" ghost>
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
  coupang: {
    display: "block",
    width: "140px",
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
    marginBottom: 20,
    fontSize: "25px",
  },
  tableContent: {
    fontSize: "14px",
    verticalAlign: "middle",
  },
  tableTop: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#EBEBEB",
    marginTop: 30,
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
};

export default Cart;

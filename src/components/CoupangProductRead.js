import { Button, Card, Checkbox, Divider } from "antd";
import "antd/dist/antd.css";
import Product from "../classes/crudl/Product";
import React, { useEffect, useState } from "react";
import Cart from '../classes/crudl/Cart'

function CoupangProductRead({ id, title, showList, style = {} }) {
  const [data, setData] = useState({});

  useEffect(() => {
    Product.readProduct(id).then((data) => setData(data));
  }, [id]);

  if (!data) return null;

  const addCart = () => {
    Cart.createCart({cartProductId: id})
  };

  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={data["img_imageUrl"]} alt={"logo"} style={styles.img} />
        <div>
          <img
            src={'https://image8.coupangcdn.com/image/badges/cou_pick/web/coupick@2x.png'} alt={'logo'} style={styles.coupangimg}
          />
          <div style={{ display: "flex" }}>
            <h2 style={styles.h2}>{data["name"]}</h2>
          </div>
          <Divider style={styles.divider} />
          <strong style={styles.strong}>
            {data["price"]}원 <small style={styles.small}>쿠팡 판매가</small>
          </strong>
          <Divider style={styles.divider} />
          <h5 style={styles.h5}>
            무료 배송
            <small style={styles.smaller}>
              (같은 판매자 상품 30,000원 이상 구매 시)
            </small>
          </h5>
          <Divider style={styles.divider} />
          <div style={styles.btnContainer}>
            <Button
              style={styles.button}
              type="primary"
              onClick={addCart}
              ghost
            >
              장바구니 담기
            </Button>
            <Button style={styles.button} type="primary">
              바로구매 >
            </Button>
          </div>
          <h5 style={styles.id}>쿠팡상품번호 : {data["id"]}</h5>
        </div>
      </div>
      <div style={styles.description}>
        <p>{data["description"]}</p>
        <img src={data['img_descImage']} alt={"description"} style={styles.descImg} />
      </div>
    </div>
  );
}

const styles = {
  img: {
    width: "350px",
    margin: "0 40px 0 5px",
  },
  coupangimg:{
    width: 68,
    marginBottom: 5
  },
  h2: { fontWeight: "bold", fontSize: "18px" },
  h5: { fontWeight: "bold", fontSize: "12px" },
  strong: { fontSize: "20px", color: "#ae0000" },
  small: {
    fontWeight: "normal",
    fontSize: "12px",
    marginLeft: "5px",
    color: "black",
  },
  smaller: {
    fontWeight: "normal",
    fontSize: "10px",
    marginLeft: "5px",
    color: "black",
  },
  divider: {
    margin: "5px 0 5px 0",
  },
  btnContainer: {
    margin: "20px 0 20px 0",
  },
  button: {
    width: "140px",
    height: "40px",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "0px 20px 0px 0px",
  },
  description: {
    marginTop: "30px",
    textAlign: "center",
  },
  id: {
    marginTop: 60
  },
  descImg: {
    marginTop: '20px'
  }
};

export default CoupangProductRead;

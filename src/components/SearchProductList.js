import { Card, Checkbox, List } from "antd";
import "antd/dist/antd.css";
import Product from "../classes/crudl/Product";
import React, { useEffect, useState } from "react";

function SearchProductList({ filter, showList, onClick, style = {} }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Product.listProduct(filter).then((data) => {
      setData(data);
    });
  }, []);

  if (!data) return null;

  return (
    <div style={style}>
      <List
        bordered
        grid={{ column: 4 }}
        dataSource={data}
        style={{ paddingTop: "20px" }}
        renderItem={(item) => (
          <List.Item onClick={onClick}>
            <Card
              size="small"
              cover={<img src={item["img_imageUrl"]} alt="logo" />}
            >
              {showList.map(function (elem) {
                if (typeof item[elem] === "boolean") {
                  return (
                    <Checkbox defaultChecked={item[elem]} disabled>
                      {elem}
                    </Checkbox>
                  );
                } else if (elem.startsWith("img_")) {
                  return;
                }
                return <h4 style={{ margin: 0 }}>{item[elem]}</h4>;
              })}
              <img
                src={
                  "https://image8.coupangcdn.com/image/badges/falcon/v1/web/rocketwow-bi-16@2x.png"
                }
                style={{ width: "60px" }}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default SearchProductList;

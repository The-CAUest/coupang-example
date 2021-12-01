import { Checkbox, List, Card } from "antd";
import "antd/dist/antd.css";
import Category from "../../classes/crudl/Category";
import React, { useEffect, useState } from "react";

function CategoryList({ filter={}, showList, onClick, style = {} }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Category.listCategory(filter).then((data) => {
      setData(data);
    }).catch(err => console.log(err));
  }, []);

  if (!data) return null;

  return (
    <div style={style}>
      <List
        grid={{
          gutter: 25,
          column: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={onClick}>
            {showList.map(function (elem) {
              if (typeof item[elem] === "boolean") {
                return (
                  <Checkbox defaultChecked={item[elem]} disabled>
                    {elem}
                  </Checkbox>
                );
              } else if (elem.startsWith("img_")) {
                return <img src={item[elem]} width={64} alt="logo" />;
              }
              // return <p>{item[elem]}</p>
            })}
            <Card title={item.id} style={{ textAlign: "center" }}>
              {item.name}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default CategoryList;

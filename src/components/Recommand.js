import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Category from "../classes/crudl/Category";
import SearchProductList from "./SearchProductList";

const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const Recommand = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const onClick = (item) => {
    navigate(`/products/${item.id}`);
  };

  useEffect(() => {
    Category.listCategory().then((cats) => setCategories(cats));
  }, []);

  return (
    <div className="remommand">
      <div className="remommand-title">
        <h2>HOT! TREND</h2>
        <h1>
          TREND 카테고리별 <span>추천 광고상품</span>
        </h1>
      </div>
      {categories.map((cat) => {
        const color = getRandomColor();

        return (
          <div
            className={"recommand-products"}
            style={{
              borderTop: `2px solid ${color}`,
            }}
          >
            <div>
              <h1
                className="category-name"
                style={{
                  color,
                }}
              >
                {cat.name}
              </h1>
            </div>
            <SearchProductList
              showList={["name", "price"]}
              filter={{ categoryID: { eq: cat.id } }}
              onClick={onClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Recommand;

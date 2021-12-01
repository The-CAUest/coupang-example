import React from "react";
import SearchProductList from "./SearchProductList";

const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const Recommand = () => {
  const color = getRandomColor();
  return (
    <div className="remommand">
      <div className="remommand-title">
        <h2>HOT! TREND</h2>
        <h1>
          TREND 카테고리별 <span>추천 광고상품</span>
        </h1>
      </div>

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
            가전/디지털
          </h1>
        </div>
        <SearchProductList showList={["name", "price"]} />
      </div>
    </div>
  );
};

export default Recommand;

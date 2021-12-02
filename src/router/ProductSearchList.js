import React from "react";
import SearchProductList from "../components/SearchProductList";
import TopBar from "../components/TopBar";
import { useNavigate, useParams } from "react-router";

function ProductSearchList() {
  const { keyword } = useParams();
  const navigate = useNavigate();

  const onClick = (item) => {
    navigate(`/products/${item.id}`);
  };

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
      <div style={styles.searchHeader}>
        전체 ><b>'여기 수정하기'</b>
      </div>
      <div style={styles.container}>
        <div style={{ display: "flex" }}>
          <b style={styles.borderText}> '여기 수정하기' </b>
          <h4 style={styles.text}>에 대한 검색 결과</h4>
        </div>
        <SearchProductList
          showList={["img_imgUrl", "name", "price"]}
          onClick={onClick}
          style={styles.listcomp}
          filter={{ name: { contains: keyword } }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "1100px",
    margin: "1px auto 70px",
    padding: "20px 20px",
  },
  text: {
    marginBottom: "15px",
  },
  borderText: {
    marginRight: "5px",
  },
  searchHeader: {
    position: "relative",
    height: "35px",
    width: "100%",
    border: "1px solid #eee",
    backgroundColor: "#fafafa",
    fontSize: "14px",
    padding: "5px 100px",
  },
  listcomp: {
    display: "flex",
    justifyContent: "center",
  },
};

export default ProductSearchList;

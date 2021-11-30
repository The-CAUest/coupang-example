import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import "../App.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setKeyword(e?.target?.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    if (!keyword) {
      alert("검색어를 입력해주세요.");
      return;
    }

    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <form className="search-bar" onSubmit={(e) => onSearch(e)}>
      <input
        className="search"
        placeholder="찾고 싶은 상품을 검색해보세요!"
        onChange={onChange}
      />
      <SearchOutlined
        onClick={onSearch}
        style={{
          fontSize: 25,
          color: "#1890ff",
        }}
      />
    </form>
  );
};

export default SearchBar;

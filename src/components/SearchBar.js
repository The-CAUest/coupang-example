import React, { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    // console.log(keyword);
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div>
      <Input.Search
        size="large"
        onChange={(e) => setKeyword(e?.target?.value)}
        placeholder="찾고 싶은 상품을 검색해보세요!"
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
};

export default SearchBar;

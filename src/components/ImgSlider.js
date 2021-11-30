import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const ImgSlider = ({ width, height }) => {
  const images = [
    "https://static.coupangcdn.com/ka/cmg_paperboy/image/1638174797490/211130_C1_%EB%B0%95%EC%8B%B1%EB%8D%B0%EC%9D%B4_SMD-14554_PC.jpg",
    "https://static.coupangcdn.com/ga/cmg_paperboy/image/1637820407554/PC_C1.jpg",
    "https://static.coupangcdn.com/ua/cmg_paperboy/image/1638174858886/%5B%EC%88%98%EC%A0%951%5D211130_%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4_A_SMD-14538_PC.jpg",
    "https://image6.coupangcdn.com/image/ccm/banner/de6a032e4ce92c3d0176f36c384b31bc.png",
    "https://static.coupangcdn.com/ja/cmg_paperboy/image/1638170394025/PC_C1%281%29.jpg",
    "https://static.coupangcdn.com/ya/cmg_paperboy/image/1638174918326/211130_PL_A_SMD-14543_PC.jpg",
  ];
  return (
    <div style={{ width, height }}>
      <Carousel autoplay>
        {images.map((imgUrl, i) => (
          <div key={i}>
            <img alt="이벤트" src={imgUrl} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImgSlider;

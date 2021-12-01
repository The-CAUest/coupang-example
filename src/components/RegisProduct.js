import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProductCreate from "../components/crudl/ProductCreate";
import CategoryList from "../components/crudl/CategoryList";

function RegisProduct() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    window.location.reload();
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        id="button"
        type="primary"
        style={styles.button}
        onClick={showModal}
      >
        상품 등록
      </Button>
      <Modal
        title="상품 등록"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductCreate
          inputColumn={[
            "name",
            "price",
            "description",
            "img_imgUrl",
            "categoryID",
          ]}
          onCreate={handleOk}
        />
        <CategoryList showList={["id", "name"]} />
        {/*<ProductUpdate id={'0ce25b16-7cfa-46b5-baf9-cbf8bb40a632'} inputColumn={["name", "price", "description", "categoryID"]} />*/}
      </Modal>
    </div>
  );
}

const styles = {
  button: {
    width: "140px",
    height: "40px",
    textAlign: "center",
    verticalAlign: "middle",
    marginTop: "20px",
  },
};

export default RegisProduct;

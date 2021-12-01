import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProductCreate from "../components/crudl/ProductCreate";
import CategoryList from "../components/crudl/CategoryList";
import CategoryCreate from './crudl/CategoryCreate'

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
            "img_imageUrl",
            "img_descImage",
            "categoryID",
          ]}
          onCreate={handleOk}
        />
        <CategoryList showList={["id", "name"]} style={styles.listcomp} />
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
  listcomp: {
    marginTop: 30
  }
};

export default RegisProduct;

import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProductUpdate from "../components/crudl/ProductUpdate";
import CategoryList from "../components/crudl/CategoryList";
import ProductCreate from "../components/crudl/ProductCreate";
import ProductDelete from "../components/crudl/ProductDelete";

function UpdateProductModal({ id }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "90px" }}>
      <Button id="button" style={styles.button} onClick={showModal}>
        수정
      </Button>
      <Modal
        title="상품 등록"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductUpdate id={id} />
        <CategoryList showList={["id", "name"]} />
      </Modal>
    </div>
  );
}

const styles = {
  button: {
    height: "30px",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "25px 0 0 10px",
  },
};

export default UpdateProductModal;

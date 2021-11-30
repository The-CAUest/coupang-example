import { Button } from "antd";
  import "antd/dist/antd.css";
  import React, { useReducer, useEffect } from "react";
  import Product from "../../classes/crudl/Product";
  
  const initialState = {
    lists: [],
    loading: true,
    error: false,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, lists: action.lists, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  }
  
  function ProductDelete({ id ,onDelete, style = {}}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      fetchProduct();
    }, []);
  
    async function fetchProduct() {
      try {
        Product.listProduct(id).then((data) => {
          dispatch({ type: "SET_DATA", list: data });
        });
      } catch (err) {
        console.log("fetch error : ", err);
        dispatch({ type: "ERROR" });
      }
    }
  
    async function deleteProduct() {
      try {
        await Product.deleteProduct(id);
        if (onDelete) {
          onDelete();
        } else {
          window.location.reload();
        }
      } catch (err) {
        console.log({ err });
      }
    }
  
    return (
      <div style={style}>
        <Button onClick={() => deleteProduct()}>Delete Product</Button>
      </div>
    );
  }
  export default ProductDelete;
  
  
import { Button } from "antd";
  import "antd/dist/antd.css";
  import React, { useReducer, useEffect } from "react";
  import Cart from "../../classes/crudl/Cart";
  
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
  
  function CartDelete({ id ,onDelete, style = {}}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      fetchCart();
    }, []);
  
    async function fetchCart() {
      try {
        Cart.listCart(id).then((data) => {
          dispatch({ type: "SET_DATA", list: data });
        });
      } catch (err) {
        console.log("fetch error : ", err);
        dispatch({ type: "ERROR" });
      }
    }
  
    async function deleteCart() {
      try {
        await Cart.deleteCart(id);
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
        <Button onClick={() => deleteCart()}>Delete Cart</Button>
      </div>
    );
  }
  export default CartDelete;
  
  
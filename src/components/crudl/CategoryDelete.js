import { Button } from "antd";
  import "antd/dist/antd.css";
  import React, { useReducer, useEffect } from "react";
  import Category from "../../classes/crudl/Category";
  
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
  
  function CategoryDelete({ id ,onDelete, style = {}}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      fetchCategory();
    }, []);
  
    async function fetchCategory() {
      try {
        Category.listCategory(id).then((data) => {
          dispatch({ type: "SET_DATA", list: data });
        });
      } catch (err) {
        console.log("fetch error : ", err);
        dispatch({ type: "ERROR" });
      }
    }
  
    async function deleteCategory() {
      try {
        await Category.deleteCategory(id);
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
        <Button onClick={() => deleteCategory()}>Delete Category</Button>
      </div>
    );
  }
  export default CategoryDelete;
  
  
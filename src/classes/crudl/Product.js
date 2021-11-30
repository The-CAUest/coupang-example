import { API, graphqlOperation } from "aws-amplify";
import { createProduct, deleteProduct, updateProduct } from "../../graphql/mutations";
import { getProduct, listProducts } from "../../graphql/queries";

class Product {
  static createProduct = async (input) => {
    const { data } = await API.graphql(graphqlOperation(createProduct, { input }));
    return data?.createProduct;
  };

  static readProduct = async (id) => {
    const { data } = await API.graphql(graphqlOperation(getProduct, { id }));
    return data?.getProduct;
  };

  static updateProduct = async (input) => {
    const { data } = await API.graphql(graphqlOperation(updateProduct, { input }));
    return data?.updateProduct;
  };

  static deleteProduct = async (id) => {
    const { data } = await API.graphql(
      graphqlOperation(deleteProduct, { input: { id } })
    );
    return data?.deleteProduct;
  };

  static listProduct = async (filter) => {
    const {
      data: {
        listProducts: { items },
      },
    } = await API.graphql(graphqlOperation(listProducts, { filter }));
    return items;
  };
}

export default Product;
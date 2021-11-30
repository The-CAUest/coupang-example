import { API, graphqlOperation } from "aws-amplify";
import { createCart, deleteCart, updateCart } from "../../graphql/mutations";
import { getCart, listCarts } from "../../graphql/queries";

class Cart {
  static createCart = async (input) => {
    const { data } = await API.graphql(graphqlOperation(createCart, { input }));
    return data?.createCart;
  };

  static readCart = async (id) => {
    const { data } = await API.graphql(graphqlOperation(getCart, { id }));
    return data?.getCart;
  };

  static updateCart = async (input) => {
    const { data } = await API.graphql(graphqlOperation(updateCart, { input }));
    return data?.updateCart;
  };

  static deleteCart = async (id) => {
    const { data } = await API.graphql(
      graphqlOperation(deleteCart, { input: { id } })
    );
    return data?.deleteCart;
  };

  static listCart = async (filter) => {
    const {
      data: {
        listCarts: { items },
      },
    } = await API.graphql(graphqlOperation(listCarts, { filter }));
    return items;
  };
}

export default Cart;
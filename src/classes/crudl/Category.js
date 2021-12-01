import { API, graphqlOperation } from "aws-amplify";
import { createCategory, deleteCategory, updateCategory } from "../../graphql/mutations";
import { getCategory, listCategorys } from "../../graphql/queries";

class Category {
  static createCategory = async (input) => {
    const { data } = await API.graphql(graphqlOperation(createCategory, { input }));
    return data?.createCategory;
  };

  static readCategory = async (id) => {
    const { data } = await API.graphql(graphqlOperation(getCategory, { id }));
    return data?.getCategory;
  };

  static updateCategory = async (input) => {
    const { data } = await API.graphql(graphqlOperation(updateCategory, { input }));
    return data?.updateCategory;
  };

  static deleteCategory = async (id) => {
    const { data } = await API.graphql(
      graphqlOperation(deleteCategory, { input: { id } })
    );
    return data?.deleteCategory;
  };

  static listCategory = async (filter) => {
    const {
      data: {
        listCategories: { items },
      },
    } = await API.graphql(graphqlOperation(listCategorys));
    return items;
  };
}

export default Category;

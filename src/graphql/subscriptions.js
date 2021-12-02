/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($owner: String) {
    onCreateCart(owner: $owner) {
      id
      createdAt
      updatedAt
      owner
      Product {
        id
        name
        description
        price
        categoryID
        img_imageUrl
        img_descImage
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($owner: String) {
    onUpdateCart(owner: $owner) {
      id
      createdAt
      updatedAt
      owner
      Product {
        id
        name
        description
        price
        categoryID
        img_imageUrl
        img_descImage
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($owner: String) {
    onDeleteCart(owner: $owner) {
      id
      createdAt
      updatedAt
      owner
      Product {
        id
        name
        description
        price
        categoryID
        img_imageUrl
        img_descImage
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
      Products {
        nextToken
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
      Products {
        nextToken
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
      Products {
        nextToken
      }
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      description
      price
      categoryID
      img_imageUrl
      img_descImage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      description
      price
      categoryID
      img_imageUrl
      img_descImage
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      description
      price
      categoryID
      img_imageUrl
      img_descImage
      createdAt
      updatedAt
    }
  }
`;

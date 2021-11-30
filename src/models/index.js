// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Product, Category } = initSchema(schema);

export {
  Cart,
  Product,
  Category
};
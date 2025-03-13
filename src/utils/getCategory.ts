import { ProductCategory, ProductPage } from "@/types/types";

const { MENS_PAGE } = ProductPage;
const { MENS_CLOTHING, WOMENS_CLOTHING } = ProductCategory;

const getCategory = (category: string) => {
  return category === MENS_PAGE ? MENS_CLOTHING : WOMENS_CLOTHING;
};

export default getCategory;

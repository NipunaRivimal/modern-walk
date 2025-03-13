import { ProductCategory, ProductPage } from "@/types/types";

export const productCategoryStyles: Partial<
  Record<
    ProductCategory,
    { title: string; backgroundColor: string; page: ProductPage }
  >
> = {
  [ProductCategory.MENS_CLOTHING]: {
    title: "Men's Clothing",
    backgroundColor: "bg-[var(--custom-green)]",
    page: ProductPage.MENS_PAGE,
  },
  [ProductCategory.WOMENS_CLOTHING]: {
    title: "Women's Clothing",
    backgroundColor: "bg-[var(--custom-rose)]",
    page: ProductPage.WOMENS_PAGE,
  },
};

export const defaultProductCategoryStyles = {
  title: "Default Collection",
  backgroundColor: "bg-gray-500",
  page: ProductPage.MENS_PAGE,
};

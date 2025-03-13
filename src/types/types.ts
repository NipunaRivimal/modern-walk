export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: Rating;
};

export type Rating = {
  rate: number;
  count: number;
};

export enum ProductCategory {
  MENS_CLOTHING = "men's clothing",
  WOMENS_CLOTHING = "women's clothing",
  ELECTRONICS = "electronics",
  JEWELERY = "jewelery",
}

export enum ProductPage {
  MENS_PAGE = "mens-clothing",
  WOMENS_PAGE = "womens-clothing",
}

export enum Sort {
  ASC = "asc",
  DESC = "desc",
}

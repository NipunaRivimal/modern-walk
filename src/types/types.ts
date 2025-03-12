export enum Gender {
  Men,
  Women,
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
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
}

export enum ProductPage {
  MENS_PAGE = "mens-clothing",
  WOMENS_PAGE = "womens-clothing",
}

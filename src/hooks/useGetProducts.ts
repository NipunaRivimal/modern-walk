import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Product, ProductCategory, ProductPage } from "@/types/types";

const { MENS_CLOTHING, WOMENS_CLOTHING } = ProductCategory;
const { MENS_PAGE } = ProductPage;

const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    query: { category },
  } = useRouter();

  useEffect(() => {
    if (!category) return;

    const productCategory =
      category === MENS_PAGE ? MENS_CLOTHING : WOMENS_CLOTHING;

    const encodedCategory = encodeURIComponent(productCategory);

    fetch(
      `https://fakestoreapi.com/products/category/${encodedCategory}?sort=desc&limit=8`
    )
      .then((response) => response.json() as Promise<Product[]>)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [category]);

  return {
    products,
    isLoading,
    error,
  };
};

export default useGetProducts;

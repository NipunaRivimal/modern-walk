import { useEffect, useState } from "react";

import { Product, ProductCategory, Sort } from "@/types/types";
import { fakeApi } from "@/utils/constants";

interface GetProductsProps {
  category: ProductCategory;
  sort?: Sort;
  limit?: number;
}

const useGetProducts = ({
  category,
  limit = 8,
  sort = Sort.DESC,
}: GetProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!category) return;

    const encodedCategory = encodeURIComponent(category);

    fetch(
      `${fakeApi}/products/category/${encodedCategory}?sort=${sort}&limit=${limit}`
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

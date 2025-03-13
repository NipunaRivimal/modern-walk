import React, { useEffect, useState } from "react";

import { Product, ProductCategory } from "@/types/types";
import useGetProducts from "@/hooks/useGetProducts";
import ProductCard from "./ProductCard";
import Loader from "./common/Loader";
import Error from "./common/Error";

const { MENS_CLOTHING, WOMENS_CLOTHING } = ProductCategory;

const getFlashProducts = (
  mensProducts: Product[],
  womensProducts: Product[]
) => {
  const maxLength = Math.max(mensProducts.length, womensProducts.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < mensProducts.length) result.push(mensProducts[i]);
    if (i < womensProducts.length) result.push(womensProducts[i]);
  }

  return result;
};

const FlashSale = () => {
  const [flashProducts, setFlashProducts] = useState<Product[]>([]);

  const {
    products: mensProducts,
    isLoading: isLoadingMensProducts,
    error: mensProductError,
  } = useGetProducts({ category: MENS_CLOTHING });
  const {
    products: womensProducts,
    isLoading: isLoadingWomensProducts,
    error: womensProductError,
  } = useGetProducts({ category: WOMENS_CLOTHING });

  const isLoading = isLoadingMensProducts || isLoadingWomensProducts;
  const isError = mensProductError || womensProductError;

  useEffect(() => {
    if (isLoading || isError) return;

    setFlashProducts(getFlashProducts(mensProducts, womensProducts));
  }, [mensProducts, womensProducts, isLoading, isError]);

  return (
    <div className="mb-4">
      <h2 className="pb-2 text-2xl font-semibold text-gray-800">Flash Sale</h2>
      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
      {!isLoading && !isError && (
        <div className="flex gap-6 py-8 scroll-container">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashSale;

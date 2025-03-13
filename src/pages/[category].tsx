import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { ProductPage } from "@/types/types";
import ProductCard from "@/components/ProductCard";
import useGetProducts from "@/hooks/useGetProducts";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

const { MENS_PAGE, WOMENS_PAGE } = ProductPage;

const Category = () => {
  const [title, setTitle] = useState("");
  const {
    products,
    isLoading: isLoadingProducts,
    error: productError,
  } = useGetProducts();

  const {
    query: { category },
    push,
  } = useRouter();

  useEffect(() => {
    if (!category) return;

    switch (category) {
      case MENS_PAGE:
        setTitle("Men's Clothing");
        break;
      case WOMENS_PAGE:
        setTitle("Women's Clothing");
        break;
      default:
        push("/");
    }
  }, [category]);

  if (productError) return <Error error={productError} />;

  return (
    <div>
      <Head>
        <title>{title} | Modern Walk</title>
      </Head>
      <h2 className="pb-2 text-2xl font-semibold text-gray-800">{title}</h2>
      {isLoadingProducts ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { ProductPage } from "@/types/types";
import ProductCard from "@/components/ProductCard";
import useGetProducts from "@/hooks/useGetProducts";
import Head from "next/head";

const { MENS_PAGE, WOMENS_PAGE } = ProductPage;

const Category = () => {
  const [title, setTitle] = useState("");
  const { products } = useGetProducts();

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

  return (
    <div>
      <Head>
        <title>{title} | Modern Walk</title>
      </Head>
      <h2 className="pb-2 text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="flex flex-wrap gap-6">
        {products.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;

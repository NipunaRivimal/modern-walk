import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { ProductPage } from "@/types/types";
import ProductCard from "@/components/ProductCard";
import useGetProducts from "@/hooks/useGetProducts";
import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
import getCategory from "@/utils/getCategory";

const { MENS_PAGE } = ProductPage;

const getTitle = (category: string) => {
  if (!Object.values(ProductPage).includes(category as ProductPage))
    return null;

  return category === MENS_PAGE ? "Men's Clothing" : "Women's Clothing";
};

const Category = () => {
  const [title, setTitle] = useState("");

  const {
    query: { category },
    push,
  } = useRouter();

  const {
    products,
    isLoading: isLoadingProducts,
    error: productError,
  } = useGetProducts({ category: getCategory(category as string) });

  useEffect(() => {
    if (!category) return;

    const _title = getTitle(category as string);

    if (!_title) {
      push("/");
      return;
    }

    setTitle(_title);
  }, [category]);

  return (
    <div>
      <Head>
        <title>{`${title} | Modern Walk`}</title>
      </Head>
      <h2 className="pb-10 text-2xl font-semibold text-gray-800">{title}</h2>
      {isLoadingProducts && <Loader />}
      {productError && <Error error={productError} />}
      {!isLoadingProducts && !productError && (
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

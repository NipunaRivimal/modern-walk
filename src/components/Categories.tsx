import React from "react";

import { ProductCategory } from "@/types/types";
import CategoryCard from "./CategoryCard";

const { MENS_CLOTHING, WOMENS_CLOTHING } = ProductCategory;

const Categories = () => {
  return (
    <>
      <h2 className="pb-4 text-2xl font-semibold text-gray-800">Categories</h2>
      <div className="flex justify-between py-8 gap-6">
        <CategoryCard category={MENS_CLOTHING} />
        <CategoryCard category={WOMENS_CLOTHING} />
      </div>
    </>
  );
};

export default Categories;

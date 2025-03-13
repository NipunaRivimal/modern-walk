import React, { FC } from "react";

import { useRouter } from "next/router";

import { ProductCategory } from "@/types/types";
import {
  defaultProductCategoryStyles,
  productCategoryStyles,
} from "@/utils/constants";

interface Props {
  category: ProductCategory;
}

const CategoryCard: FC<Props> = ({ category }) => {
  const { push } = useRouter();

  const { title, backgroundColor, page } =
    productCategoryStyles[category] || defaultProductCategoryStyles;

  const onCardClick = () => {
    push(page);
  };

  return (
    <div
      className={`w-full h-60 rounded-2xl shadow-[var(--box-shadow)] hover:shadow-[var(--box-hover-shadow)] flex items-center justify-center cursor-pointer ${backgroundColor} transition-shadow duration-300`}
      onClick={onCardClick}
    >
      <h2 className="text-white text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default CategoryCard;

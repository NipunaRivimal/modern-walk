import React, { FC } from "react";

import { useRouter } from "next/router";

import { ProductCategory, ProductPage } from "@/types/types";

interface Props {
  category: ProductCategory;
}

const CategoryCard: FC<Props> = ({ category }) => {
  const { push } = useRouter();

  const { MENS_PAGE, WOMENS_PAGE } = ProductPage;
  const { MENS_CLOTHING } = ProductCategory;
  const isMen = category === MENS_CLOTHING;
  const bgColor = isMen
    ? "bg-[var(--custom-green)]"
    : "bg-[var(--custom-rose)]";

  const onCardClick = () => {
    push(isMen ? MENS_PAGE : WOMENS_PAGE);
  };

  return (
    <div
      className={`w-full h-60 rounded-2xl shadow-[var(--box-shadow)] hover:shadow-[var(--box-hover-shadow)] flex items-center justify-center cursor-pointer ${bgColor} transition-shadow duration-300`}
      onClick={onCardClick}
    >
      <h2 className="text-white text-4xl font-bold">
        {isMen ? "Men's Clothing" : "Women's Clothing"}
      </h2>
    </div>
  );
};

export default CategoryCard;

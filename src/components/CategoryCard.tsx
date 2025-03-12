import React, { FC } from "react";

import { useRouter } from "next/router";

import { Gender, ProductPage } from "@/types/types";

interface Props {
  gender: Gender;
}

const CategoryCard: FC<Props> = ({ gender }) => {
  const { push } = useRouter();

  const { Men } = Gender;
  const { MENS_PAGE, WOMENS_PAGE } = ProductPage;
  const isMen = gender === Men;
  const bgColor = isMen
    ? "bg-[var(--custom-green)]"
    : "bg-[var(--custom-rose)]";

  const onCardClick = () => {
    push(isMen ? MENS_PAGE : WOMENS_PAGE);
  };

  return (
    <div
      className={`w-full h-60 rounded-2xl shadow-[var(--box-shadow)] flex items-center justify-center cursor-pointer ${bgColor}`}
      onClick={onCardClick}
    >
      <h2 className="text-white text-2xl font-bold">
        {isMen ? "Men's Clothing" : "Women's Clothing"}
      </h2>
    </div>
  );
};

export default CategoryCard;

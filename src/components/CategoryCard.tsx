import React, { FC } from "react";

import { Gender } from "@/types/types";

interface Props {
  gender: Gender;
}

const CategoryCard: FC<Props> = ({ gender }) => {
  const { Men } = Gender;
  const bgColor = gender === Men ? "bg-teal-400" : "bg-rose-400";

  return (
    <div
      className={`w-full h-60 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer ${bgColor}`}
    >
      <h2 className="text-white text-2xl font-bold">
        {gender === Men ? "Men's Clothing" : "Women's Clothing"}
      </h2>
    </div>
  );
};

export default CategoryCard;

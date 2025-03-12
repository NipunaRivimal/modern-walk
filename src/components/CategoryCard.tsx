import { Gender } from "@/types/types";
import React, { FC } from "react";

interface Props {
  gender: Gender;
}

const CategoryCard: FC<Props> = ({ gender }) => {
  const { Men } = Gender;
  return (
    <div className="w-80 h-44 bg-teal-400 rounded-2xl shadow-lg flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">
        {gender === Men ? "Men's Clothing" : "Women's Clothing"}
      </h2>
    </div>
  );
};

export default CategoryCard;

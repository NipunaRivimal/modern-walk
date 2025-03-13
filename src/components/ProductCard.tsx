import React, { FC } from "react";

import Image from "next/image";

import { Product } from "@/types/types";
import {
  defaultProductCategoryStyles,
  productCategoryStyles,
} from "@/utils/constants";

interface Props {
  product: Product;
  cardWidth?: number;
}

const ProductCard: FC<Props> = ({ product, cardWidth = 300 }) => {
  const { category, description, price, image, title } = product;
  const { backgroundColor } =
    productCategoryStyles[category] || defaultProductCategoryStyles;

  return (
    <div
      className="bg-white rounded-2xl shadow-[var(--box-shadow)] hover:shadow-[var(--box-hover-shadow)] overflow-hidden text-center cursor-pointer flex flex-col justify-between transition-shadow duration-300"
      style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px` }}
    >
      <h2 className="px-4 pt-4 pb-2 text-lg font-semibold text-gray-800">
        {title}
      </h2>
      <div className="flex flex-col">
        <div className="relative h-48 flex px-4 mt-auto mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div
          className={`p-4 text-black rounded-t-2xl ${backgroundColor} mt-auto`}
        >
          <p className="text-xl font-bold text-[var(--custom-blue)] mb-1">
            Rs {price}
          </p>
          <p className="text-sm leading-snug line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

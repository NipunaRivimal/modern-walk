import React, { FC } from "react";

import Image from "next/image";

import { Product } from "@/types/types";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { category, description, price, image, title } = product;
  const bgColor =
    category === "men's clothing"
      ? "bg-[var(--custom-green)]"
      : "bg-[var(--custom-rose)]";

  return (
    <div className="w-full bg-white rounded-2xl shadow-[var(--box-shadow)] overflow-hidden text-center cursor-pointer flex flex-col h-full">
      <h2 className="px-4 pt-4 pb-2 text-lg font-semibold text-gray-800">
        {title}
      </h2>
      <div className="relative h-48 flex px-4 mt-auto">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div className={`p-4 text-black rounded-t-2xl ${bgColor} mt-auto`}>
        <p className="text-xl font-bold text-blue-600 mb-1">Rs {price}</p>
        <p className="text-sm leading-snug line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

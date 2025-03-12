import React from "react";

import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden text-center cursor-pointer">
      <h2 className="p-4 text-lg font-semibold text-gray-800">
        Mens Cotton Jacket
      </h2>
      <div className="m-4 h-60 relative justify-center items-center">
        <Image
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Mens Cotton Jacket"
          fill
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="bg-teal-400 p-4 text-black rounded-2xl">
        <p className="text-xl font-bold text-blue-600 mb-2">Rs 55.99</p>
        <p className="text-sm leading-snug line-clamp-2">
          Great outerwear jackets for Spring/Autumn/Winter, suitable for many
          occasions, such as working, hiking...
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

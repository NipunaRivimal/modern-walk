import Head from "next/head";

import { ProductCategory } from "@/types/types";
import CategoryCard from "@/components/CategoryCard";
import FlashSale from "@/components/FlashSale";

const { MENS_CLOTHING, WOMENS_CLOTHING } = ProductCategory;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Modern Walk</title>
      </Head>
      <main className="flex flex-col">
        <FlashSale />
        <h2 className="pb-4 text-2xl font-semibold text-gray-800">
          Categories
        </h2>
        <div className="flex justify-between py-8 gap-6">
          <CategoryCard category={MENS_CLOTHING} />
          <CategoryCard category={WOMENS_CLOTHING} />
        </div>
      </main>
    </>
  );
}

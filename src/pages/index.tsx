import Head from "next/head";

import FlashSale from "@/components/FlashSale";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Modern Walk</title>
      </Head>
      <main className="flex flex-col">
        <FlashSale />
        <Categories />
      </main>
    </>
  );
}

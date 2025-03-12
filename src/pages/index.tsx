import CategoryCard from "@/components/CategoryCard";
import { Gender } from "@/types/types";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Modern Walk</title>
      </Head>
      <main className="flex flex-col">
        <p>Categories</p>
        <div className="flex justify-between mt-2">
          <CategoryCard gender={Gender.Men} />
          <CategoryCard gender={Gender.Women} />
        </div>
      </main>
    </>
  );
}

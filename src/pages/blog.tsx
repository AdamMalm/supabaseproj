import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Head from "next/head";
import { AddExample } from "../components/AddExample";
import { ShowExamples } from "../components/ShowExamples";

export default function Blog() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-bold tracking-tight dark:text-slate-200 sm:text-3xl">
            Welcome to the homepage
          </h1>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            This is an example of a large text, below is normal text
          </p>
          <AddExample />
          <ShowExamples />
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Projects() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <div className="mx-auto max-w-8xl px-4 pt-10 sm:px-6 md:px-8 ">
          <h1 className="text-2xl font-bold tracking-tight dark:text-slate-200 sm:text-3xl">
            Welcome to the project page
          </h1>

          <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            This is an example of a large text, below is normal text
          </p>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 pt-10">
            <PostCard src="https://source.unsplash.com/random/?programming" />
            <PostCard src="https://source.unsplash.com/random/?frontend" />
            <PostCard src="https://source.unsplash.com/random/?design" />
            <PostCard src="https://source.unsplash.com/random/?IoT" />
            <PostCard src="https://source.unsplash.com/random/?backend" />
            <PostCard src="https://source.unsplash.com/random/?javascript" />
            <PostCard src="https://source.unsplash.com/random/?nextjs" />
          </div>
        </div>
      </main>
    </>
  );
}

import Header from "../components/Header";
import { AddExample } from "../components/AddExample";
import { ShowExamples } from "../components/ShowExamples";
import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";

export default function Blog() {
  const { data: sessionData } = useSession();

  return (
    <>
      <main className="min-h-screen">
        <Header />
        <div className="mx-auto max-w-8xl px-4 pt-10 sm:px-6 md:px-8">
          <h1 className="text-2xl font-bold tracking-tight dark:text-slate-200 sm:text-3xl">
            Welcome to the blog page
          </h1>

          <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            This is an example of a large text, below is normal text
          </p>

          {sessionData?.user?.role === Role.ADMIN ? <AddExample /> : null}
          <ShowExamples />
        </div>
      </main>
    </>
  );
}

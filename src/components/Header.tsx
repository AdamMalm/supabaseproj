"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShowcase } from "./AuthShowcase";

export default function Header() {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className="flex justify-center border-b dark:border-slate-400/10">
      <div className="flex h-14 w-full max-w-8xl items-center justify-between px-4 dark:bg-slate-800 sm:px-6 md:px-8">
        <AuthShowcase />

        <button
          className="mx-4 md:hidden"
          onClick={() => setHamburgerState(!hamburgerState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 dark:text-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <nav className="hidden w-80 md:block">
          <ul className="text-md hidden justify-around font-bold tracking-wide dark:text-slate-200 md:flex">
            <li className="hover:text-slate-300">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/">About</Link>
            </li>
          </ul>
        </nav>

        {hamburgerState ? (
          <>
            <div
              className="fixed inset-0 h-screen w-full backdrop-blur-sm dark:bg-slate-800/80 md:hidden"
              onClick={() => setHamburgerState(!hamburgerState)}
            ></div>
            <aside className="fixed top-0 right-0 z-10 flex h-screen w-48 flex-col items-center justify-center dark:bg-slate-700 md:hidden">
              <nav>
                <ol className="text-md flex w-full flex-col items-center font-medium leading-tight dark:text-slate-200">
                  <li className="hover:text-slate-300">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="hover:text-slate-300">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="hover:text-slate-300">
                    <Link href="/">About</Link>
                  </li>
                </ol>
              </nav>
            </aside>
          </>
        ) : null}
      </div>
    </div>
  );
}

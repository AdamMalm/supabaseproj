"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className="border-b dark:border-slate-400/10 flex justify-center">
      <div className="h-14 w-full dark:bg-slate-800 flex justify-end items-center max-w-8xl px-4 sm:px-6 md:px-8">
        <button
          className="md:hidden mx-4"
          onClick={() => setHamburgerState(!hamburgerState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 dark:text-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <nav className="hidden md:block w-80">
          <ul className="hidden md:flex justify-around dark:text-slate-200 text-md font-bold tracking-wide">
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
              className="h-screen w-full inset-0 fixed md:hidden backdrop-blur-sm dark:bg-slate-800/80"
              onClick={() => setHamburgerState(!hamburgerState)}
            ></div>
            <aside className="h-screen w-48 dark:bg-slate-700 flex flex-col fixed top-0 right-0 items-center z-10 justify-center md:hidden">
              <nav>
                <ol className="flex flex-col w-full items-center dark:text-slate-200 text-md leading-tight font-medium">
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

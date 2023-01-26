import { type NextPage } from "next";
import Header from "../components/Header";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <main className="min-h-screen">
        <Header />
        <div className="mx-auto max-w-8xl px-4 pt-10 sm:px-6 md:px-8">
          {!session ? (
            <Auth
              providers={["github"]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <p>Account page will go here.</p>
          )}
          {/*           <h1 className="text-2xl font-bold tracking-tight dark:text-slate-200 sm:text-3xl">
            Welcome to the homepage
          </h1>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            This is an example of a large text, below is normal text
          </p>

          <div id="content-wrapper" className="mt-8 max-w-xl">
            <p className="mt-5 mb-5 text-slate-900 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-5 mb-5 text-slate-900 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-5 mb-5 text-slate-900 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Home;

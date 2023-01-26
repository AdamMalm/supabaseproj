import { createClient } from "@supabase/supabase-js";

export default function Login() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
    }
  );

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  return (
    <>
      <main className="mx-auto flex max-w-8xl flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <h1 className="mt-14 text-2xl font-medium tracking-tight dark:text-slate-200 sm:text-3xl">
          Login
        </h1>
        <div className="shadow-mds mt-6 overflow-hidden rounded-xl bg-slate-700 p-8">
          {/* <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            This is an example of a large text, below is normal text
          </p> */}
          <form onSubmit={signInWithGitHub} className="flex flex-col">
            <label className="flex flex-col items-center">
              Email:
              <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
    </>
  );
}

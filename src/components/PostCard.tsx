export default function PostCard({
  src,
}: /* title,
  description,
  date,
  link, */
{
  src: string;
  /*   title: string;
  description: string;
  date: string;
  link: string; */
}) {
  return (
    <div className="bg-slate-700 shadow-md rounded-xl overflow-hidden">
      <div className="md:shrink-0">
        <img src={src} className="h-96 w-full object-none" />
      </div>

      <div className="p-8">
        <h1 className="dark:text-slate-200 font-bold text-2xl tracking-tight sm:text-3xl">
          This is a post
        </h1>

        <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
          This is an example of a large text, below is normal text
        </p>

        <p className="mt-5 text-slate-900 dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

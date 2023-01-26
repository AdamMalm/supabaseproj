import { api } from "../utils/api";

export const ShowExamples = () => {
  const examples = api.example.getAll.useQuery();

  if (!examples.data)
    return <p className="text-slate-700 dark:text-slate-400">Loading...</p>;

  return (
    <div>
      <ul>
        {examples.data.map((example) => (
          <li className="text-slate-700 dark:text-slate-400" key={example.id}>
            {example.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

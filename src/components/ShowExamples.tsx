import { api } from "../utils/api";

export const ShowExamples = () => {
  const examples = api.example.getAll.useQuery();

  if (!examples.data) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {examples.data.map((example) => (
          <li key={example.id}>{example.text}</li>
        ))}
      </ul>
    </div>
  );
};

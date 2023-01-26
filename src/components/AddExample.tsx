import { useState } from "react";

import { api } from "../utils/api";

export const AddExample = () => {
  const addExample = api.example.create.useMutation();
  const utils = api.useContext();

  const [text, setText] = useState("");

  return (
    <div className="mt-8">
      <input
        placeholder="name"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          addExample.mutate(text, {
            onSuccess: () => {
              utils.example.getAll.invalidate();
              setText("");
            },
          });
        }}
        disabled={addExample.isLoading}
        className="mx-2 bg-slate-700 px-2 text-slate-200"
      >
        Create
      </button>
      {addExample.isLoading && <p>Saving...</p>}
    </div>
  );
};

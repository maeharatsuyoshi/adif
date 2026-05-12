"use client";

import { useFormStatus } from "react-dom";
import Spinner from "../../components/Spinner";

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center gap-2 rounded-md border border-red-500/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-200 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <>
          <Spinner size={12} />
          Deleting…
        </>
      ) : (
        "Delete"
      )}
    </button>
  );
}

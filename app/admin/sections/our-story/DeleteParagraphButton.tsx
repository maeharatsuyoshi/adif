"use client";

import { useFormStatus } from "react-dom";
import Spinner from "../../../components/Spinner";

export default function DeleteParagraphButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center gap-1.5 rounded-md border border-red-400/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-red-200 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-60"
      onClick={(e) => {
        if (!confirm("Delete this paragraph?")) e.preventDefault();
      }}
    >
      {pending ? <Spinner size={12} /> : null}
      Delete
    </button>
  );
}

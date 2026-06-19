"use client";

import Spinner from "../../components/Spinner";
import type { SectionFormState } from "./actions";

type Props = {
  pending: boolean;
  state: SectionFormState;
  cancelHref?: string;
};

export default function SaveBar({ pending, state, cancelHref = "/admin" }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {state?.error ? (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200"
        >
          {state.error}
        </p>
      ) : null}
      {state?.ok ? (
        <p
          role="status"
          className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200"
        >
          Saved.
        </p>
      ) : null}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? (
            <>
              <Spinner size={14} />
              Saving…
            </>
          ) : (
            "Save"
          )}
        </button>
        <a
          href={cancelHref}
          className="rounded-md border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Back
        </a>
      </div>
    </div>
  );
}

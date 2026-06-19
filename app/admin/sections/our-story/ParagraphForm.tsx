"use client";

import { useActionState } from "react";
import { Field, FieldPair, labelCls, inputCls } from "../FormBits";
import Spinner from "../../../components/Spinner";
import type { ParagraphFormState } from "../actions";

type Props = {
  action: (
    state: ParagraphFormState,
    formData: FormData,
  ) => Promise<ParagraphFormState>;
  initial?: {
    sort_order?: number;
    variant?: "default" | "emphasis" | "quote";
    text_en?: string;
    text_ja?: string;
  };
  submitLabel: string;
};

export default function ParagraphForm({ action, initial, submitLabel }: Props) {
  const [state, formAction, pending] = useActionState<
    ParagraphFormState,
    FormData
  >(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <FieldPair>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sort_order" className={labelCls}>
            Sort order
          </label>
          <input
            id="sort_order"
            name="sort_order"
            type="number"
            defaultValue={initial?.sort_order ?? 0}
            className={inputCls}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="variant" className={labelCls}>
            Style
          </label>
          <select
            id="variant"
            name="variant"
            defaultValue={initial?.variant ?? "default"}
            className={inputCls}
          >
            <option value="default">Default</option>
            <option value="emphasis">Emphasis (bold)</option>
            <option value="quote">Quote (italic, with bar)</option>
          </select>
        </div>
      </FieldPair>

      <FieldPair>
        <Field
          id="text_en"
          name="text_en"
          label="Text (EN)"
          defaultValue={initial?.text_en}
          textarea
          rows={6}
        />
        <Field
          id="text_ja"
          name="text_ja"
          label="Text (JA)"
          defaultValue={initial?.text_ja}
          textarea
          rows={6}
        />
      </FieldPair>

      {state?.error ? (
        <p
          role="alert"
          className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200"
        >
          {state.error}
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
            submitLabel
          )}
        </button>
        <a
          href="/admin/sections/our-story"
          className="rounded-md border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}

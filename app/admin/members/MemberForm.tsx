"use client";

import { useActionState } from "react";
import type { MemberFormState } from "./actions";

type Props = {
  action: (
    state: MemberFormState,
    formData: FormData,
  ) => Promise<MemberFormState>;
  initial?: {
    sort_order?: number;
    photo_url?: string | null;
    name_en?: string;
    name_ja?: string;
    role_en?: string;
    role_ja?: string;
    bio_en?: string;
    bio_ja?: string;
  };
  submitLabel: string;
};

const inputCls =
  "w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-white/40 focus:bg-white/10";
const labelCls = "text-xs uppercase tracking-[0.2em] text-white/60";

export default function MemberForm({ action, initial, submitLabel }: Props) {
  const [state, formAction, pending] = useActionState<
    MemberFormState,
    FormData
  >(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {initial?.photo_url ? (
        <input
          type="hidden"
          name="current_photo_url"
          defaultValue={initial.photo_url}
        />
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name_en" className={labelCls}>
            Name (EN)
          </label>
          <input
            id="name_en"
            name="name_en"
            required
            defaultValue={initial?.name_en ?? ""}
            className={inputCls}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name_ja" className={labelCls}>
            Name (JA)
          </label>
          <input
            id="name_ja"
            name="name_ja"
            required
            defaultValue={initial?.name_ja ?? ""}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="role_en" className={labelCls}>
            Role (EN)
          </label>
          <input
            id="role_en"
            name="role_en"
            required
            defaultValue={initial?.role_en ?? ""}
            className={inputCls}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="role_ja" className={labelCls}>
            Role (JA)
          </label>
          <input
            id="role_ja"
            name="role_ja"
            required
            defaultValue={initial?.role_ja ?? ""}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bio_en" className={labelCls}>
            Bio (EN)
          </label>
          <textarea
            id="bio_en"
            name="bio_en"
            rows={8}
            defaultValue={initial?.bio_en ?? ""}
            className={`${inputCls} resize-y leading-relaxed`}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bio_ja" className={labelCls}>
            Bio (JA)
          </label>
          <textarea
            id="bio_ja"
            name="bio_ja"
            rows={8}
            defaultValue={initial?.bio_ja ?? ""}
            className={`${inputCls} resize-y leading-relaxed`}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
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
          <label htmlFor="photo" className={labelCls}>
            Photo {initial?.photo_url ? "(replace)" : ""}
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            className="w-full text-sm text-white/80 file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-black hover:file:bg-white/90"
          />
          {initial?.photo_url ? (
            <label className="mt-1 flex items-center gap-2 text-xs text-white/60">
              <input type="checkbox" name="remove_photo" value="1" />
              Remove current photo
            </label>
          ) : null}
        </div>
      </div>

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
          className="rounded-md bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Saving…" : submitLabel}
        </button>
        <a
          href="/admin/members"
          className="rounded-md border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}

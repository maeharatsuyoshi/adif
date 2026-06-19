"use client";

import type { ReactNode } from "react";

export const inputCls =
  "w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-white/40 focus:bg-white/10";
export const labelCls = "text-xs uppercase tracking-[0.2em] text-white/60";

type FieldProps = {
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  type?: string;
  placeholder?: string;
};

export function Field({
  id,
  name,
  label,
  defaultValue,
  required,
  textarea,
  rows = 4,
  type = "text",
  placeholder,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          defaultValue={defaultValue ?? ""}
          placeholder={placeholder}
          className={`${inputCls} resize-y leading-relaxed`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue ?? ""}
          placeholder={placeholder}
          className={inputCls}
        />
      )}
    </div>
  );
}

export function FieldPair({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function FieldSet({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-5">
      <legend className="px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

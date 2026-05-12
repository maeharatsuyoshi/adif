import { logout } from "../login/actions";

export default function AdminTopBar() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
      >
        View site
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 3h7v7" />
          <path d="M21 3l-9 9" />
          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
        </svg>
      </a>
      <form action={logout}>
        <button
          type="submit"
          className="rounded-md border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}

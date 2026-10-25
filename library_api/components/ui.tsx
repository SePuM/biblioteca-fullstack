import type { LoanStatus } from "@/lib/types";

export const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2.5 text-sm text-slate-900 shadow-xs " +
  "backdrop-blur-xs transition outline-none placeholder:text-slate-400 focus:border-teal-500 " +
  "focus:ring-3 focus:ring-teal-500/15 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100 " +
  "dark:placeholder:text-slate-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/20";

export const buttonClass =
  "inline-flex items-center justify-center rounded-xl bg-teal-600 px-4 py-2.5 text-sm " +
  "font-semibold text-white shadow-sm transition hover:bg-teal-500 active:scale-[0.98] " +
  "disabled:cursor-not-allowed disabled:opacity-50 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950";

export const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 py-2 " +
  "text-sm font-medium text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900 " +
  "active:scale-[0.98] disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 " +
  "dark:hover:bg-slate-800 dark:hover:text-white";

export const emptyBoxClass =
  "rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-10 text-center text-slate-500 " +
  "dark:border-slate-800 dark:bg-slate-900/20 dark:text-slate-400";

const STATUS: Record<LoanStatus, { label: string; className: string }> = {
  requested: {
    label: "En revisión",
    className: "bg-amber-500/10 text-amber-700 ring-1 ring-amber-600/20 dark:text-amber-300",
  },
  approved: {
    label: "Activo (Prestado)",
    className: "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-600/20 dark:text-emerald-300",
  },
  rejected: {
    label: "Rechazado",
    className: "bg-rose-500/10 text-rose-700 ring-1 ring-rose-600/20 dark:text-rose-300",
  },
  returned: {
    label: "Devuelto",
    className: "bg-slate-500/10 text-slate-600 ring-1 ring-slate-600/20 dark:text-slate-400",
  },
};

export function StatusBadge({ status }: { status: LoanStatus }) {
  const { label, className } = STATUS[status];
  return (
    <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold ${className}`}>
      {label}
    </span>
  );
}

export function Alert({ kind, children }: { kind: "error" | "ok"; children: React.ReactNode }) {
  const styles =
    kind === "error"
      ? "bg-rose-500/10 text-rose-700 ring-1 ring-rose-500/20 dark:text-rose-300"
      : "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300";
  return (
    <p role={kind === "error" ? "alert" : "status"} className={`rounded-xl px-4 py-2.5 text-sm font-medium ${styles}`}>
      {children}
    </p>
  );
}

export function formatDate(iso: string | null): string {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
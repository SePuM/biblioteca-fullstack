import Link from "next/link";
import type { Book } from "@/lib/types";

const placeholderClass =
  "flex items-center justify-center bg-linear-to-br from-teal-500/20 to-teal-500/5 text-3xl font-bold " +
  "text-teal-700 dark:text-teal-300";

const cardClass =
  "group relative flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs transition-all " +
  "duration-200 hover:-translate-y-0.5 hover:border-teal-500/40 hover:shadow-md dark:border-slate-800/80 " +
  "dark:bg-slate-900/60 dark:hover:border-teal-500/30";

export function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  if (book.coverUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={book.coverUrl}
        alt={`Portada de ${book.title}`}
        className={`object-cover shadow-xs ${className}`}
      />
    );
  }
  return (
    <div aria-hidden className={`shadow-xs ${placeholderClass} ${className}`}>
      {book.title.charAt(0)}
    </div>
  );
}

export function BookCard({ book }: { book: Book }) {
  const available = book.availableCopies > 0;
  return (
    <Link href={`/books/${book.id}`} className={cardClass}>
      <BookCover book={book} className="h-32 w-22 shrink-0 rounded-xl" />
      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div className="flex flex-col gap-1">
          <span className="w-fit rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {book.category} · {book.year}
          </span>
          <h2 className="font-semibold text-slate-900 line-clamp-1 transition group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
            {book.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">{book.author}</p>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 dark:border-slate-800/60">
          <span
            className={`text-xs font-semibold ${
              available ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
            }`}
          >
            {available ? `${book.availableCopies} de ${book.totalCopies} disponibles` : "Agotado temporalmente"}
          </span>
          <span className="text-xs font-medium text-teal-600 transition group-hover:translate-x-0.5 dark:text-teal-400">
            Ver detalle →
          </span>
        </div>
      </div>
    </Link>
  );
}
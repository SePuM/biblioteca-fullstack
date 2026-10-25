import Link from "next/link";
import { logoutAction } from "@/app/actions";
import { getWebUser } from "@/lib/web/session";
import { secondaryButtonClass } from "./ui";

export async function Header() {
  const user = await getWebUser();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/70 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href={user ? "/books" : "/login"} className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 font-bold text-white shadow-sm transition group-hover:bg-teal-500 dark:bg-teal-500 dark:text-slate-950">
            📚
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 transition group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
            Biblioteca Digital
          </span>
        </Link>

        {user && (
          <nav className="flex items-center gap-3 sm:gap-6 text-sm">
            <Link
              href="/books"
              className="font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            >
              Catálogo
            </Link>
            <Link
              href="/loans"
              className="font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
            >
              {user.role === "librarian" ? "Administrar Préstamos" : "Mis Préstamos"}
            </Link>

            <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-1 sm:flex dark:bg-slate-900">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {user.name} ({user.role === "librarian" ? "Bibliotecario" : "Estudiante"})
              </span>
            </div>

            <form action={logoutAction}>
              <button className={secondaryButtonClass}>Cerrar Sesión</button>
            </form>
          </nav>
        )}
      </div>
    </header>
  );
}
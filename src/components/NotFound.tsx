import { m } from "@/paraglide/messages";
import { Link } from "@tanstack/react-router";

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <p>{m.bad_kind_kangaroo_fond()}</p>}
      </div>
      <p className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => window.history.back()}
          className="bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          {m.fancy_jolly_antelope_shine()}
        </button>
        <Link
          to="/"
          className="bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          {m.spicy_merry_shad_view()}
        </Link>
      </p>
    </div>
  );
}

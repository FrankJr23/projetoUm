import Link from "next/link";
import { series } from "@/data/conteudos";

export default function ListaSeries() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Aulas por série</h1>
      <p className="mt-2 text-slate-600">Escolha a sua série para ver os temas disponíveis.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {series.map((s) => (
          <Link
            key={s.slug}
            href={`/series/${s.slug}`}
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-medium text-indigo-600">{s.nivel}</p>
            <h2 className="mt-1 text-2xl font-bold">{s.titulo}</h2>
            <p className="mt-3 text-sm text-slate-500">{s.temas.length} temas</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
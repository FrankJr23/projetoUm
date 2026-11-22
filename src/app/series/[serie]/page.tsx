import Link from "next/link";
import { notFound } from "next/navigation";
import { series } from "@/data/conteudos";

export default async function PaginaSerie({
  params,
}: {
  params: Promise<{ serie: string }>;
}) {
  const { serie: slug } = await params;
  const serie = series.find((s) => s.slug === slug);

  if (!serie) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/series" className="text-sm text-indigo-600 hover:underline">
        ← Todas as séries
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{serie.titulo}</h1>
      <p className="text-slate-600">{serie.nivel}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serie.temas.map((t) => (
          <div key={t.slug} className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">{t.titulo}</h2>
            <p className="mt-2 text-sm text-slate-600">{t.descricao}</p>
            <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              Videoaulas em breve
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
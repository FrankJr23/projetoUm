import Link from "next/link";
import { series } from "@/data/conteudos";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Aprender matemática pode ser simples</h1>
        <p className="mt-4 text-lg text-slate-600">
          Videoaulas, exercícios e acompanhamento do seu progresso, do 6º ano ao ensino médio.
        </p>
        <Link
          href="/series"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500"
        >
          Começar agora
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold">Escolha sua série</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {series.map((s) => (
            <Link
              key={s.slug}
              href={`/series/${s.slug}`}
              className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xl font-bold text-indigo-700">{s.titulo}</p>
              <p className="mt-1 text-xs text-slate-500">{s.nivel}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
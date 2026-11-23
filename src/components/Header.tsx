"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const links = [
  { href: "/series", label: "Aulas" },
  { href: "/quiz", label: "Quiz" },
  { href: "/agendar", label: "Agendar" },
  { href: "/comunidade", label: "Comunidade" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => setLogado(!!data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_evento, sessao) => {
      setLogado(!!sessao?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const destino = logado ? "/conta" : "/entrar";
  const rotulo = logado ? "Minha conta" : "Entrar";

  return (
    <header className="sticky top-0 z-50 bg-indigo-700 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          MatHub
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-indigo-200">
              {l.label}
            </Link>
          ))}
          <Link
            href={destino}
            className="rounded-lg bg-white px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            {rotulo}
          </Link>
        </nav>

        <button
          className="text-2xl md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {aberto && (
        <nav className="flex flex-col gap-4 border-t border-indigo-500 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setAberto(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href={destino}
            onClick={() => setAberto(false)}
            className="font-semibold"
          >
            {rotulo}
          </Link>
        </nav>
      )}
    </header>
  );
}

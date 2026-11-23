"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Perfil = { nome: string | null; papel: string };

const nomesPapel: Record<string, string> = {
  aluno: "Aluno",
  pagante: "Aluno premium",
  professor: "Professor",
};

export default function Conta() {
  const router = useRouter();
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [email, setEmail] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.replace("/entrar");
        return;
      }
      setEmail(data.user.email ?? "");

      const { data: p, error } = await supabase
        .from("profiles")
        .select("nome, papel")
        .eq("id", data.user.id)
        .maybeSingle();

      if (error) setErro(error.message);
      setPerfil(p);
      setCarregando(false);
    }
    carregar();
  }, [router]);

  async function sair() {
    await createClient().auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (carregando) {
    return (
      <p className="px-6 py-16 text-center text-slate-500">Carregando...</p>
    );
  }

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <h1 className="text-3xl font-bold">Minha conta</h1>

      <div className="mt-8 space-y-3 rounded-xl bg-white p-6 shadow-sm">
        <p>
          <span className="font-medium">E-mail:</span> {email}
        </p>
        {perfil ? (
          <>
            <p>
              <span className="font-medium">Nome:</span> {perfil.nome}
            </p>
            <p>
              <span className="font-medium">Perfil:</span>{" "}
              {nomesPapel[perfil.papel] ?? perfil.papel}
            </p>
          </>
        ) : (
          <p className="text-sm text-red-600">
            Perfil não encontrado{erro ? ` (${erro})` : ""}. Verifique se a
            tabela profiles foi criada no Supabase.
          </p>
        )}
      </div>

      <button
        onClick={sair}
        className="mt-6 rounded-lg border border-slate-300 px-5 py-2 font-medium hover:bg-slate-100"
      >
        Sair
      </button>
    </div>
  );
}

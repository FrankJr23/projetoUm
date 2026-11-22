export default function Footer() {
  return (
    <footer className="bg-slate-900 py-6 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} MatHub. Todos os direitos reservados.
    </footer>
  );
}
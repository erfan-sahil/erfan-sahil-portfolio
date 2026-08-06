import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-5 py-8 sm:px-6">
      <div className="pt-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          © 2026 {personal.footerName}
        </p>
      </div>
    </footer>
  );
}

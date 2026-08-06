export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden className="size-1.5 rounded-[2px] bg-accent" />
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {children}
      </h2>
    </div>
  );
}

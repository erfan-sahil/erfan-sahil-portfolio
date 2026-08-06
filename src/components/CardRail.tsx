import { Children, Fragment, type ReactNode } from "react";

export function CardRail({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);

  return (
    <div className="card-rail">
      <span className="card-rail-cross card-rail-cross--tl" aria-hidden />
      <span className="card-rail-cross card-rail-cross--tr" aria-hidden />
      <span className="card-rail-cross card-rail-cross--bl" aria-hidden />
      <span className="card-rail-cross card-rail-cross--br" aria-hidden />
      <span className="card-rail-edge card-rail-edge--top" aria-hidden />
      <span className="card-rail-edge card-rail-edge--bottom" aria-hidden />

      {items.map((child, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <div className="card-rail-rule" aria-hidden>
              <span className="card-rail-cross card-rail-cross--ml" />
              <span className="card-rail-cross card-rail-cross--mr" />
            </div>
          )}
          {child}
        </Fragment>
      ))}
    </div>
  );
}

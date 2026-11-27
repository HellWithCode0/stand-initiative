import type { ReactNode } from "react";

/**
 * A visible marker for a fact that STAND still has to supply.
 * It is styled like a highlighter mark so nobody mistakes it for real copy.
 */
export function Todo({ children }: { children: string }) {
  return <span className="todo">[{children}]</span>;
}

/**
 * Shows `value` when it is set, otherwise a Todo marker.
 * With `href`, a set value becomes a link (mailto:, tel: or a web address).
 */
export function Fill({
  value,
  label,
  href,
  external,
}: {
  value: string | null | undefined;
  label: string;
  href?: (value: string) => string;
  external?: boolean;
}): ReactNode {
  if (!value) return <Todo>{label}</Todo>;
  if (!href) return value;
  return (
    <a
      href={href(value)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {value}
    </a>
  );
}

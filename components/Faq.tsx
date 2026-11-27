import type { Faq as FaqItem } from "@/content/donate";
import { Todo } from "./Todo";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>
            <span>{item.q}</span>
            <span className="faq-sign" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{item.a ?? <Todo>{item.pending ?? "ADD ANSWER"}</Todo>}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import type { Category, Post } from "@/content/news";
import { formatDate } from "@/lib/format";
import { Todo } from "./Todo";

type Item = Pick<Post, "slug" | "title" | "category" | "date" | "summary">;

export function NewsList({ posts, categories }: { posts: Item[]; categories: Category[] }) {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);
  const used = categories.filter((c) => posts.some((p) => p.category === c));

  return (
    <div className="news">
      <div className="filter" role="group" aria-label="Filter updates by category">
        {(["All", ...used] as const).map((c) => (
          <button
            key={c}
            type="button"
            className="chip"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "update" : "updates"}
        {active === "All" ? "" : ` in ${active}`}.
      </p>

      <ul className="news-list">
        {shown.map((p) => (
          <li key={p.slug} className="news-item stretched-host">
            <article>
              <p className="news-meta">
                <span className="news-cat">{p.category}</span>
                <span className="news-date">
                  {p.date ? <time dateTime={p.date}>{formatDate(p.date)}</time> : <Todo>ADD DATE</Todo>}
                </span>
              </p>
              <h2 className="news-title">
                <Link href={`/news/${p.slug}`} className="stretched">
                  {p.title}
                </Link>
              </h2>
              <p className="news-summary">{p.summary}</p>
              <span className="news-more" aria-hidden="true">
                Read the update →
              </span>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

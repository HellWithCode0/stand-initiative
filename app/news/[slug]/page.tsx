import Link from "next/link";
import { notFound } from "next/navigation";
import { Todo } from "@/components/Todo";
import { getPost, posts } from "@/content/news";
import { formatDate } from "@/lib/format";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta(`/news/${post.slug}`, post.title, post.summary, "article");
}

export default async function PostPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="article">
      <header className="container article-head">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li aria-current="page">{post.category}</li>
          </ol>
        </nav>
        <h1 className="display article-title">{post.title}</h1>
        <p className="lede">{post.summary}</p>
        <p className="news-meta">
          <span className="news-cat">{post.category}</span>
          <span className="news-date">
            {post.date ? <time dateTime={post.date}>{formatDate(post.date)}</time> : <Todo>ADD DATE</Todo>}
          </span>
        </p>
      </header>

      <div className="container">
        <div className="prose article-body">
          {post.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "list")
              return (
                <ul key={i} className="ticks">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>
      </div>

      <footer className="container article-foot">
        <h2 className="kicker">More updates</h2>
        <ul className="article-more">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/news/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/news" className="arrow-link">
          All news
        </Link>
      </footer>
    </article>
  );
}

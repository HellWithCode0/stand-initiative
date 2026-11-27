import { NewsList } from "@/components/NewsList";
import { PageIntro } from "@/components/PageIntro";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { categories, posts } from "@/content/news";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "/news",
  "News",
  "Updates from STAND: programme news, new resources and partnership announcements.",
);

export default function NewsPage() {
  const items = posts.map(({ slug, title, category, date, summary }) => ({
    slug,
    title,
    category,
    date,
    summary,
  }));

  return (
    <>
      <PageIntro
        kicker="News"
        title="Updates from STAND."
        ball="blue"
        lede="Programme news, new resources and partnership announcements."
      />
      <section className="section section-tight" aria-label="All updates">
        <div className="container news-layout">
          <NewsList posts={items} categories={categories} />
          <div className="news-aside">
            <NewsletterForm id="news-newsletter" tone="light" />
          </div>
        </div>
      </section>
    </>
  );
}

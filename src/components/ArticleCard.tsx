import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured }: ArticleCardProps) => {
  return (
    <article
      className={`group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md ${
        featured ? "md:flex" : ""
      }`}
    >
      <div className={`bg-accent ${featured ? "md:w-2/5" : "aspect-video"}`}>
        <div className="flex h-full min-h-[180px] items-center justify-center text-4xl">
          💡
        </div>
      </div>
      <div className={`p-5 ${featured ? "md:w-3/5 md:p-6" : ""}`}>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Link
            to={`/blog?category=${encodeURIComponent(article.category)}`}
            className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary"
          >
            {article.category}
          </Link>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <Link
          to={`/blog/${article.slug}`}
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;

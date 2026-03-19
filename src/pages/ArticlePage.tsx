import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import BlogSidebar from "@/components/BlogSidebar";
import AdPlacement from "@/components/AdPlacement";
import ShareButtons from "@/components/ShareButtons";
import ArticleCard from "@/components/ArticleCard";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Article Not Found</h1>
          <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const related = getRelatedArticles(article.id);
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <Link to="/blog" className="text-sm text-primary hover:underline">← Back to Blog</Link>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <Link to={`/blog?category=${encodeURIComponent(article.category)}`} className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                {article.category}
              </Link>
              <span>By {article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {article.title}
            </h1>

            <ShareButtons url={url} title={article.title} />

            <div className="article-content mt-8" dangerouslySetInnerHTML={{ __html: article.content }} />

            <div className="mt-8 border-t border-border pt-6">
              <ShareButtons url={url} title={article.title} />
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-bold text-foreground">Related Posts</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              </div>
            )}
          </article>
          <BlogSidebar currentCategory={article.category} />
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;

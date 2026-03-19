import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import BlogSidebar from "@/components/BlogSidebar";
import { articles, searchArticles, getArticlesByCategory } from "@/data/articles";
import { useState } from "react";

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";
  const [page, setPage] = useState(1);

  let filtered = articles;
  if (searchQuery) filtered = searchArticles(searchQuery);
  else if (categoryFilter) filtered = getArticlesByCategory(categoryFilter);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-heading text-3xl font-bold text-foreground">
          {searchQuery ? `Search: "${searchQuery}"` : categoryFilter || "All Articles"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {paginated.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => { setPage(i + 1); window.scrollTo(0, 0); }}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      page === i + 1 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
          <BlogSidebar currentCategory={categoryFilter} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

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
<!-- BEGIN AADS AD UNIT 2431067 -->

<div style="position: absolute; z-index: 99999">
      <input autocomplete="off" type="checkbox" id="aadsstickymmxnw0m2" hidden />
      <div style="padding-top: auto; padding-bottom: 0;">
        <div style="width:100%;height:auto;position:fixed;text-align:center;font-size:0;top:0;left:0;right:0;margin:auto">
          <label for="aadsstickymmxnw0m2" style="top: 50%;transform: translateY(-50%);right:24px;; position: absolute;border-radius: 4px; background: rgba(248, 248, 249, 0.70); padding: 4px;z-index: 99999;cursor:pointer">
            <svg fill="#000000" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
            </svg>
          </label>
          <div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 99998;"><iframe data-aa=2431067 src=//acceptable.a-ads.com/2431067/?size=Adaptive style='border:0; padding:0; width:70%; height:auto; overflow:hidden; margin: auto'></iframe></div>
        </div>
        <style>
      #aadsstickymmxnw0m2:checked + div {
        display: none;
      }
    </style>
    </div></div>

<!-- END AADS AD UNIT 2431067 -->
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

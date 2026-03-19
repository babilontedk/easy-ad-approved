import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";

interface BlogSidebarProps {
  currentCategory?: string;
}

const BlogSidebar = ({ currentCategory }: BlogSidebarProps) => {
  const popularPosts = articles.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="font-heading text-base font-bold text-foreground">Categories</h3>
        <ul className="mt-4 space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/blog?category=${encodeURIComponent(cat)}`}
                className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                  currentCategory === cat ? "bg-accent font-medium text-primary" : "text-muted-foreground"
                }`}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="font-heading text-base font-bold text-foreground">Popular Posts</h3>
        <ul className="mt-4 space-y-4">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <h4 className="text-sm font-medium text-foreground leading-snug transition-colors group-hover:text-primary">
                  {post.title}
                </h4>
                <span className="mt-1 text-xs text-muted-foreground">{post.readTime}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};

export default BlogSidebar;

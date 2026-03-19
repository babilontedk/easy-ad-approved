import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import BlogSidebar from "@/components/BlogSidebar";
import { articles } from "@/data/articles";

const Index = () => {
  const latestPosts = articles.slice(0, 6);
  const featuredPosts = articles.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Your Guide to <span className="text-primary">Smart Online Income</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover proven strategies, practical tips, and expert advice to help you earn money online, build side hustles, and achieve financial freedom.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/blog" className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Explore Articles
            </Link>
            <Link to="/about" className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-foreground">Featured Articles</h2>
        <div className="mt-6 space-y-6">
          {featuredPosts.map((a) => (
            <ArticleCard key={a.id} article={a} featured />
          ))}
        </div>
      </section>

      {/* Latest + Sidebar */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">Latest Posts</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {latestPosts.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/blog" className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                View All Articles
              </Link>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-heading text-lg font-bold text-primary">
              💡 Smart Income Hub
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Your trusted source for online income strategies, side hustles, and smart financial tips.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground">Categories</h4>
            <ul className="mt-3 space-y-2">
              {["Make Money Online", "Side Hustles", "Digital Tools", "Financial Tips"].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/blog?category=${encodeURIComponent(cat)}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground">Legal</h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Cookie Policy", to: "/cookie-policy" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Smart Income Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

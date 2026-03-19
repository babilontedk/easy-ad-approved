import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AdPlacement from "./AdPlacement";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AdPlacement type="banner" className="mx-auto mt-2 max-w-6xl px-4" />
      <main className="flex-1">{children}</main>
      <AdPlacement type="footer" className="mx-auto mb-2 max-w-6xl px-4" />
      <Footer />
    </div>
  );
};

export default Layout;

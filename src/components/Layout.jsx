import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-primary">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children, layout = "max-w-screen-xl mx-auto" }) {
  return (
    <main>
      <Header></Header>
      <div className={`${layout} prose`}>{children}</div>
      <Footer></Footer>
    </main>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LayoutDefault() {
  return (
    <div>
      <Header />
      <main>
        <div>Noi dung chinh</div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

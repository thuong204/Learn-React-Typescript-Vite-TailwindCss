import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LayoutDefault() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="text-xl font-semibold">Nội dung chính</div>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 overflow-auto">
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;

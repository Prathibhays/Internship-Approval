import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Page */}
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 bg-gray-100 p-8">
          <Outlet />
          <div className="content">
          {children}
        </div>
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
export default Layout;
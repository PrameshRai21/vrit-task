// components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="px-5 lg:px-10 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

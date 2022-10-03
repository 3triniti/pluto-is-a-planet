import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <div className="bg-star bg-black min-h-screen min-w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

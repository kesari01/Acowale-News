import { Outlet } from "react-router-dom";
// import Footer from "../../components/footer/Footer";
import "./Layout";

export default function Layout() {
  return (
    <div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

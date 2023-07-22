import { A, Outlet } from "@solidjs/router";

const MainLayout = () => {
  return (
    <div>
        <ul>
            <li><A href="/">Home</A></li>
            <li><A href="/projects">Projects</A></li>
            <li><A href="/contact">Contact</A></li>
        </ul>
        <Outlet />
    </div>
  );
};

export default MainLayout;

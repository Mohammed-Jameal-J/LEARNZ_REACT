import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;

import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#fbf9f4] dark:bg-neutral-950">
      <Outlet />
    </div>
  );
};

export default MainLayout;

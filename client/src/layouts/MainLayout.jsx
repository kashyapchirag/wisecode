import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#fbf9f4] dark:bg-neutral-950">
      <div className="mx-auto max-w-[75vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

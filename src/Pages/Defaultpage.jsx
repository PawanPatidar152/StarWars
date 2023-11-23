import React from "react";
import TopNav from "../Componants/TopNav";
import SideNave from "../Componants/SideNave";
import DefaultBottomPage from "../Componants/DefaultBottomPage";

const Defaultpage = () => {
  return (
    <div className="bg-blue-950 h-screen">
      <div>
        <TopNav />
      </div>
      <div>
        <div className="flex flex-row h-full">
          <SideNave />
          <div className="w-full flex justify-center h-full p-5">
            <DefaultBottomPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Defaultpage;

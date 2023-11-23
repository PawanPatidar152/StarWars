import React from "react";
import folder from "../assets/FolderSimple.svg";
import { Link } from "react-router-dom";
const FolderComponant = (data) => {
  return (
    <div className="flex flex-row  justify-between p-3 ">
      <div className="flex flex-row gap-2">
        <div>
          <img src={folder} alt="FolderLogo" />
        </div>
        <div className="text-white "> {data.name}</div>
      </div>
      <div className="text-white ">{">"}</div>
    </div>
  );
};

const SideNave = () => {
  return (
    <div className="h-auto w-56 p-3 ">
      <Link to="/Films">
        <FolderComponant name="Films" />
      </Link>
      <FolderComponant name="People" />
      <FolderComponant name="Planets" />
      <FolderComponant name="Species" />
      <FolderComponant name="Starships" />
      <FolderComponant name="Vehicles" />
    </div>
  );
};

export default SideNave;

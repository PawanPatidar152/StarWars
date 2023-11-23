import * as React from "react";
import viewGrid from "../assets/View grid.svg";
import viewList from "../assets/View list.svg";
import { Link } from "react-router-dom";
export default function Style() {
  return (
    <div className="justify-between items-center self-stretch flex gap-5 max-md:flex-wrap px-5 ">
      <div className="text-white text-xl font-semibold leading-7 my-auto">
        Films
      </div>
      <div className="flex bg-white gap-2">
        <Link to="/Films">
          <img src={viewGrid} alt="" />
        </Link>

        <p>Grid</p>
        <Link to="/Films/List">
          <img className="bg-blue-950" src={viewList} alt="" />
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import TopNav from "../Componants/TopNav";
import SideNave from "../Componants/SideNave";
import Movie from "../Componants/Movie";
import SearchBar from "../Componants/SearchBar";
import Style from "../Componants/Style";

const MoviePage = () => {
  return (
    <div className="bg-blue-950 h-screen">
      <div className="flex items-center justify-between ">
        <TopNav />
        <SearchBar/>
      </div>
      <div>
        <div className="flex flex-row h-full">
          <SideNave />
          <div className="w-full flex flex-col justify-center h-full p-5 gap-4">
            
            <Style/>
            <Movie/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

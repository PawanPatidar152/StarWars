import React from "react";
import Rectangle from "../assets/RectangleImg.png";

const DefaultBottomPage = () => {
  return (
    <div className="items-stretch shadow-2xl bg-white flex flex-col px-6 rounded-xl border-2 border-solid border-slate-200 max-md:px-5">
      <img
        src={Rectangle} 
        className="aspect-[2.97]  object-center w-full overflow-hidden mt-6 max-md:max-w-full"
      />
      <div className="text-slate-700 text-2xl font-bold leading-6 tracking-normal mt-5 max-md:max-w-full">
        Welcome to Star Wars Dashboard
      </div>
      <div className="text-slate-700 text-sm leading-5 tracking-normal opacity-80 mt-3 mb-6 max-w-2xl">
        Star Wars is an American epic space opera multimedia franchise created
        by George Lucas, which began with the eponymous 1977 film and quickly
        became a worldwide pop culture phenomenon.
      </div>
    </div>
  );
}
export default DefaultBottomPage;

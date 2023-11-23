import React from "react";
import reel from "../assets/FilmReel.svg";
import MenuButton from "../assets/Menu Button.svg";
import { useState, useEffect } from "react";
const MovieCart = (data) => {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <div className="items-stretch flex grow flex-col max-md:mt-5">
        <div />
        <img
          className=" flex shrink-0 h-40 flex-col rounded-lg"
          src={data.src}
          alt=""
        />
        <div className="items-stretch bg-slate-50 bg-opacity-20 flex w-full flex-col mt-1 px-4 py-3 rounded-lg">
          <div className="justify-between items-center flex w-full gap-5 max-md:-mr-1">
            <div className="items-stretch flex gap-3 my-auto">
              <img
                loading="lazy"
                src={reel}
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm font-medium leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
                {data.name}
              </div>
            </div>
            <div className="items-center bg-opacity-20 self-stretch flex aspect-square flex-col p-1 rounded-md">
              <img
                loading="lazy"
                src={MenuButton}
                className="aspect-square object-contain object-center w-6 overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Movie = () => {
    const [title, setTitle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/2/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
        setTitle(data.title); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 
  const [title1, setTitle1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/6/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setTitle1(data.title); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 
  const [title2, setTitle2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/3/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setTitle2(data.title); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 
  const [title3, setTitle3] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/1/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setTitle3(data.title); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 
  const [title4, setTitle4] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/2/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setTitle4(data.title); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 
  const [title5, setTitle5] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/5/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setTitle5(data.title); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []); 
  return (
    <div className="w-full">
      <div className="items-stretch self-stretch flex flex-col px-5">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <MovieCart src="https://picsum.photos/201/300" name={title} />
            <MovieCart src="https://picsum.photos/202/300" name={title1}/>
            <MovieCart src="https://picsum.photos/203/300" name={title2}/>
          </div>
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <MovieCart src="https://picsum.photos/201/301" name={title3} />
            <MovieCart src="https://picsum.photos/201/302" name={title4}/>
            <MovieCart src="https://picsum.photos/201/303" name={title5}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

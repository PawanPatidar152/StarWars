import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function ListMovie(props) {
  const [title, setTitle] = useState(null);
  const [director, SetDirector] = useState(null);
  const [date, SetDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/2/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setTitle(data.title);
        SetDirector(data.director);
        SetDate(data.release_date);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [title1, setTitle1] = useState(null);
  const [director1, SetDirector1] = useState(null);
  const [date1, SetDate1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/1/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data)
        setTitle1(data.title);
        SetDirector1(data.director);
        SetDate1(data.release_date);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [title2, setTitle2] = useState(null);
  const [director2, SetDirector2] = useState(null);
  const [date2, SetDate2] = useState(null);

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
        SetDirector2(data.director);
        SetDate2(data.release_date);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [title3, setTitle3] = useState(null);
  const [director3, SetDirector3] = useState(null);
  const [date3, SetDate3] = useState(null);

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
        SetDirector3(data.director);
        SetDate3(data.release_date);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [title4, setTitle4] = useState(null);
  const [director4, SetDirector4] = useState(null);
  const [date4, SetDate4] = useState(null);

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
        SetDirector4(data.director);
        SetDate4(data.release_date);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [title5, setTitle5] = useState(null);
  const [director5, SetDirector5] = useState(null);
  const [date5, SetDate5] = useState(null);

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
        SetDirector5(data.director);
        SetDate5(data.release_date);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="self-stretch">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
          <div className="items-start flex flex-col">
            <div className="items-stretch self-stretch bg-slate-600 flex flex-col">
              <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap bg-slate-600 px-4 py-2.5 rounded-md">
                Name
              </div>
            </div>
            <div className="items-stretch self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] flex flex-col px-4 py-4 border-b border-solid">
              <div className="items-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ff44fc3-224d-4c92-a9f4-ccc4369926ac?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
                  {title1}
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] flex flex-col px-4 py-4 border-b border-solid">
              <div className="items-stretch flex w-[214px] max-w-full gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2caea3df-2a9a-4c3c-b3eb-47e36eb301a8?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-sm font-medium leading-5 tracking-wide">
                  {title2}
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] flex flex-col px-4 py-4 border-b border-solid">
              <div className="items-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9503e389-7a77-4786-a267-3dff344938ba?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
                  {title3}
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] flex flex-col px-4 py-4 border-b border-solid">
              <div className="items-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f4b7c8b-5078-4144-b469-094ced8c9422?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
                  {title4}
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] flex flex-col px-4 py-4 border-b border-solid">
              <div className="items-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b110b4e1-ebc2-4970-be8d-36bc4cc38499?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
                  {title5}
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] flex flex-col px-4 py-4 border-b border-solid">
              <div className="items-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e63b6c41-1ee8-4158-a705-3db8484f4619?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
                  {title3}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start flex flex-col px-5">
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch bg-slate-600 -mr-5 px-4 py-2.5 rounded-none">
              Director
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              <div className="items-stretch flex justify-between gap-2">
                <div className="text-white text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
                  {title3}
                </div>
              </div>
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {director1}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {director2}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {director3}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {director4}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {director5}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start flex flex-col px-5">
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch bg-slate-600 -mr-5 px-4 py-2.5 rounded-none">
              Release Date
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {date}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {date1}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {date2}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {date3}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {date4}
            </div>
            <div className="text-white text-center text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border-b-[color:var(--Grey-Stroke,#DEDEDE)] -mr-5 px-4 py-4 border-b border-solid">
              {date5}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

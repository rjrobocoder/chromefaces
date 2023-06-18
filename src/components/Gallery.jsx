import React from "react";
import downloadIcon from "../images/downloads.png";

const Gallery = () => {
  const cards = [
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
    {
      face: "test",
      title: "test",
      downloads: 4,
    },
  ];
  return (
    <section>
      <div className="h-[60px] w-full my-4 flex items-center justify-between px-6">
        <h1 className="text-[22px] font-bold">All Faces</h1>
        <div>
          <ul className="flex text-[16px] gap-3">
            <li>
              <button className="bg-blue-500 text-white py-[3px] px-[25px] rounded-full">
                All
              </button>
            </li>
            <li>
              <button className="py-[3px] px-[25px] rounded-full border border-gray-200 hover:bg-blue-500 hover:text-white hover:border-transparent">
                Live
              </button>
            </li>
            <li>
              <button className="py-[3px] px-[25px] rounded-full border border-gray-200 hover:bg-blue-500 hover:text-white hover:border-transparent">
                Static
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-[60px] gap-y-[38px]">
        {cards?.map((card, i) => {
          return (
            <div key={i} className="">
              <div className="w-full h-[196px] rounded-[9px] bg-black"></div>
              <div className="py-2 flex items-center justify-between pr-1">
                <h1>Generated with Autodesign</h1>
                <div className="flex items-baseline gap-1">
                  <span>9K</span>
                  <div>
                    <img
                      className="h-[16px]"
                      src={downloadIcon}
                      alt="downloads"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;

import React, { useState } from "react";
import { BANNER_CDN_URL } from "../utils/helper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FoodCarousel({ bannerData }) {
  console.log(bannerData);
  // console.log(bannerData.length);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    setCurrentIndex(currentIndex - 1);
    console.log("previous");
  };
  const nextimg = () => {
    setCurrentIndex(currentIndex + 1);

    console.log("Next");
  };

  return (
    <>
      <div className="flex justify-between px-2 ">
        <h1 className="font-bold text-2xl p-3 ">Best Offers for you</h1>
        <div className="flex items-center   ">
          {currentIndex !== 0 && (
            <button
              className="bg-black/10 rounded-full p-1 m-1"
              onClick={prevImg}
            >
              <ArrowBackIcon />
            </button>
          )}
          {currentIndex + 1 !== bannerData.length && (
            <button
              className="bg-black/10 rounded-full p-1 m-1"
              onClick={nextimg}
            >
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>
      <div className="overflow-auto scrollbar-hide md:scrollbar-default">
        <div
          className="flex transition-all duration-1000 ease-in-out cursor-pointer"
          style={{ transform: `translateX(-${currentIndex * 24}rem )` }}
        >
          {bannerData.map((item, index) => (
            <img
              key={index}
              src={BANNER_CDN_URL + item.imageId}
              alt={`img ${index}`}
              className={`w-2/5 m-2 ${index === 0 ? "ml-0" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

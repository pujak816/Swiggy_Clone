import React from "react";
import { SEARCH_CDN_URL } from "../utils/helper";

const SearchCard = ({ data }) => {
  const { cloudinaryImageId, name, costForTwo } = data?.info;
  return (
    <div className="search_cards flex gap-4 mx-3 my-2 ">
      <div className="w-[64px] h-[64px] ">
        <img
          src={SEARCH_CDN_URL + cloudinaryImageId}
          alt="img"
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className=" tracking-wide">{name}</h1>
        <p className="text-xs text-gray-500">{costForTwo}</p>
      </div>
    </div>
  );
};

export default SearchCard;

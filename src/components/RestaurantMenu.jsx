import React, { useState } from "react";
import ResShimmer from "./ResShimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function RestaurantMenu() {
  const { resId } = useParams(); // useParam return object

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ResShimmer />;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    areaName,
    locality,
    totalRatingsString,
    availabilityServiceabilityMessage,
  } = resInfo?.cards[0].card?.card?.info;
  // console.log(resInfo);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="pt-20">
      <div className=" max-w-4xl m-5 mx-auto ">
        <p className="text-xs">Restaurant ID: {resId}</p>

        <div className="p-2 flex justify-between border-dotted border-b-2">
          <div className="w-9/12 ">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-slate-500 text-sm">{cuisines.join(", ")}</p>
            <p className="text-slate-500 text-sm">
              {locality}
              <span>, {areaName}</span>
            </p>
          </div>
          <div className="">
            <div className="text-green-300 p-2 border-b-2">
              <StarIcon sx={{ fontSize: 18 }} />
              {avgRating}
            </div>
            <div className="text-xs text-slate-500 font-semibold ">
              {totalRatingsString}
            </div>
          </div>
        </div>
        <div className="p-2 py-4 border-b-2 my-4">
          <p className="font-bold text-lg">
            <CurrencyRupeeIcon sx={{ fontSize: 18 }} />
            {costForTwo / 100} cost for two
          </p>
          <div>{availabilityServiceabilityMessage}</div>
        </div>

        {/* categories accordians */}
        <div className="res_menu">
          {categories.map((category, index) => (
            //controlled component
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

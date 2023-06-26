import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function RestaurantMenu() {
  const { resId } = useParams(); // useParam return object

  const resInfo = useRestaurantMenu(resId);

  const dispatch = useDispatch();

  const addMenuItem = (item) => {
    dispatch(addItem(item));
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    areaName,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards[0].card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="flex">
      <div className="flex max-w-4xl m-5 mx-auto">
        <div className="mx-10">
          <h1>Restaurant ID: {resId}</h1>
          <h1 className="text-2xl font-bold">{name}</h1>
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
            alt="img"
          />
          <p>{cuisines.join(", ")}</p>
          <p className="text-blue-500">{areaName}</p>
          <h5>Rs.{costForTwo / 100} cost for two</h5>
          <p className="text-green-300 bg-stone-700 w-8">{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>

        <div className="res_menu">
          <h2 className="font-semibold mt-4">Menu</h2>
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                <div>
                  <button
                    className="bg-pink-800 text-white p-2"
                    onClick={() => addMenuItem(item)}
                  >
                    Add Item
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

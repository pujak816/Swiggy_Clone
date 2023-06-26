import React from "react";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";

export default function RestaurantMenu() {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
    // console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[0].card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(itemCards);

  return (
    <div className="res_mnu_container">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h5>{costForTwo / 100} cost for two</h5>
      <div className="res_menu">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { FETCH_MENU_API } from "./contants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null); // state var returns an array
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
  };
  // return restaurant Data
  return resInfo;
};

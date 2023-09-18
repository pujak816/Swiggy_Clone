import { useState, useEffect } from "react";
import { FETCH_RESDATA } from "../utils/helper";

const useRestaurantData = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // let allRestaurant = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESDATA);
    const json = await data.json();

    // allRestaurant =
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
    //     (res) => res.info
    //   );

    setListofRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCarouselData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setSuggestions(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {
    listofRestaurant,
    filteredRes,
    carouselData,
    setfilteredRes,
    setShowSuggestions,
    showSuggestions,
    setSuggestions,
    suggestions,
    // allRestaurant,
  };
};

export default useRestaurantData;

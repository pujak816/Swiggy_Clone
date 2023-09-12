import { useState, useEffect } from "react";
import { FETCH_RESDATA } from "../utils/helper";

const useRestaurantData = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [noOfRestaurant, setNoOfRestaurant] = useState(0);

  let allRestaurant = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESDATA);
    const json = await data.json();

    allRestaurant =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      );
    console.log(allRestaurant);

    setListofRestaurant((prevRes) => [...prevRes, ...allRestaurant]);
    setfilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCarouselData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setNoOfRestaurant(allRestaurant.length);
  };

  return {
    listofRestaurant,
    filteredRes,
    carouselData,
    setfilteredRes,
    noOfRestaurant,
  };
};

export default useRestaurantData;

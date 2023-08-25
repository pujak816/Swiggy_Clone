import { useState, useEffect } from "react";
import { FETCH_RESDATA } from "./helper";

const useRestaurantData = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [noOfRestaurant, setNoOfRestaurant] = useState(0);

  const [page, setPage] = useState(1);

  let allRestaurant = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${FETCH_RESDATA}&page=${page}`);
    const json = await data.json();
    console.log(json);

    allRestaurant =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        //optional chaining
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
    // console.log(noOfRestaurant);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    listofRestaurant,
    filteredRes,
    carouselData,
    setfilteredRes,
    noOfRestaurant,
  };
};

export default useRestaurantData;

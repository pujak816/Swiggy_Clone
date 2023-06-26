import RestaurantCards from "./RestaurantCards";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setsearchText] = useState("");

  //   console.log("body rendered")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9566294&lng=77.70468230000002&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListofRestaurant(json.data?.cards[2]?.data?.data?.cards); //optional chaining
    setfilteredRes(json.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're Offline, please check your internet connection </h1>
    );
  }

  // conditional rendering
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={styles.body}>
      <div>
        <div className={styles.search_box}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listofRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText);
              setfilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className={styles.filter}
          onClick={() => {
            const filteredData = listofRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setfilteredRes(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className={styles.res_cards_container}>
        {filteredRes.map((restuarants) => {
          return (
            <Link
              key={restuarants.data.id}
              to={"/restaurants/" + restuarants.data.id}
            >
              <RestaurantCards resData={restuarants} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

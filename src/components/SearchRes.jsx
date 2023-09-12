import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCards";
import useRestaurantData from "../hooks/useRestaurantData";

const SearchRes = () => {
  const [searchText, setsearchText] = useState("");

  const { listofRestaurant, filteredRes, setfilteredRes } = useRestaurantData();
  return (
    <div className="pt-20 p-20">
      <h1> Search Here</h1>
      <div className="search_btn">
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
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRes(filteredRes);
          }}
        >
          Search
        </button>
        <div className="bg-orange-200">
          <div className="flex flex-wrap justify-center">
            {filteredRes.map((restuarant) => {
              return (
                <Link
                  key={restuarant?.info.id}
                  to={"/restaurant/" + restuarant?.info.id}
                >
                  {<RestaurantCards resData={restuarant?.info} />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchRes;

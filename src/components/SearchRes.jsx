import { useState } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import useRestaurantData from "../hooks/useRestaurantData";
import ResShimmer from "./ResShimmer";

const SearchRes = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const { listofRestaurant, filteredRes, setfilteredRes } = useRestaurantData();

  if (!filteredRes) return <ResShimmer />;
  return (
    <div className="pt-36 py-20 ">
      <form
        className="search_bar flex gap-2 justify-center "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={searchQuery}
          placeholder="Search for restaurants"
          className="px-4 py-3 w-2/3 border border-gray-400 rounded-md"
          onChange={(e) => {
            setsearchQuery(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRes = listofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setfilteredRes(filteredRes);
          }}
          className="bg-orange-500 text-white px-4 p-[2px] rounded-xl"
        >
          Search
        </button>
      </form>

      <div className="sm:w-3/4 mx-auto sm:py-5 sm:px-2">
        <div className="flex flex-col justify-center">
          {filteredRes.map((res) => (
            <Link key={res?.info.id} to={"/restaurant/" + res?.info.id}>
              <SearchCard data={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchRes;

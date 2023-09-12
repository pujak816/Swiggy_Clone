import RestaurantCards, { withPromotedLabel } from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import FoodCarousel from "./FoodCarousel";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  //   console.log("body rendered")

  const {
    listofRestaurant,
    filteredRes,
    carouselData,
    setfilteredRes,
    noOfRestaurant,
  } = useRestaurantData();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're Offline, please check your internet connection </h1>
    );
  }

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCards);

  // conditional rendering
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-20">
      <div className="px-2 sm:px-28">
        <FoodCarousel bannerData={carouselData} />
      </div>
      <div className="sm:mx-16">
        <div className="res-cards_container pt-10  ">
          <h1 className="font-bold sm:text-2xl ml-10 py-2">
            Restaurants with online food delivery in Bangalore
          </h1>
          <div className="flex  pl-10">
            <p className="hover:cursor-pointer bg-white border-2 py-1 px-2 text-sm rounded-3xl m-1 ">
              {noOfRestaurant} Restaurants
            </p>
            <button
              className="bg-white border-2 py-1 px-2 text-sm rounded-3xl m-1 "
              onClick={() => {
                const filteredData = listofRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setfilteredRes(filteredData);
              }}
            >
              {" "}
              Ratings 4.0+
            </button>
          </div>

          <div className="flex flex-wrap justify-center">
            {filteredRes.map((restuarant) => {
              return (
                <Link
                  key={restuarant?.info.id}
                  to={"/restaurant/" + restuarant?.info.id}
                >
                  {restuarant?.info.promoted ? (
                    <PromotedRestaurantCard resData={restuarant?.info} />
                  ) : (
                    <RestaurantCards {...restuarant?.info} />
                  )}
                </Link>
              );
            })}

            {/* shimmer  */}
            {Array(1)
              .fill("")
              .map((e, index) => (
                <div
                  key={index}
                  className=" animate-pulse w-[254px] h-[220px] p-3 m-5 border border-slate-200 rounded-md bg-[#fdfdfd]"
                >
                  <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-100"></div>

                  <p class="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                  <p class="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                  <p class="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

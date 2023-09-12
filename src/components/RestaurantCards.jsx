import { CDN_URL } from "../utils/helper";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

const RestaurantCards = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  areaName,
}) => {
  return (
    <>
      <div className="sm:w-[260px] md:max-w-[360px] lg:w-[360px] my-4 px-4 rounded-lg hover:shadow-lg ">
        <div className="flex-col">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="img"
            className="rounded-md"
          />
          <div className="mt-3">
            <h3 className="text-[17px] font-semibold truncate">{name}</h3>
            <p className="text-xs text-slate-600 mt-1 truncate">
              {cuisines.join(", ")}
            </p>
            <p className="text-sm text-slate-600">{areaName}</p>
          </div>
          <div className="flex mt-4 text-xs justify-between items-center text-slate-600">
            <div className="flex items-center">
              <i>
                <StarsRoundedIcon sx={{ color: "green", fontSize: "20px" }} />
              </i>
              <span className="pl-[1px] font-semibold text-lg">
                {avgRating}
              </span>
            </div>
            <div>.</div>
            <div className="font-semibold">{costForTwo}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2">Promoted</label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;

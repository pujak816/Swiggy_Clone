const resDataUurl =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9566294&lng=77.70468230000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

export const FETCH_RESDATA = resDataUurl;

const menuApiUrl =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9566294&lng=77.70468230000002&restaurantId="
  );
export const FETCH_MENU_API = menuApiUrl;

export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const BANNER_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

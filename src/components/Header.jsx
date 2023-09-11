import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Log In");

  // Subscribing to the store using a selector : useSelector()
  const cart = useSelector((store) => store.cart);

  return (
    <div className="flex justify-between px-8 bg-white shadow-lg fixed w-full z-10">
      <div>
        <img
          className="w-40 p-2"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
          alt="logo"
          width="100px"
        />
      </div>
      <div>
        <ul className="flex p-4 gap-8 items-center font-semibold text-[#435B66]">
          <li className="hidden">
            <NavLink to="/search" className="flex items-center ">
              <SearchIcon sx={{ color: "#435B66", fontSize: "22px" }} /> Search
            </NavLink>{" "}
          </li>
          <li className="hidden">
            <NavLink to="/grocery">Grocery</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li className="hidden">
            <NavLink to="/about">About US</NavLink>{" "}
          </li>
          <li className="hidden">
            <NavLink to="/contact">Contact US</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Cart{" "}
              <span className="text-green-400">{cart.cartTotalQuantity}</span>{" "}
            </NavLink>
          </li>
          <button
            className="px-4 py-1  bg-orange-400 rounded-lg text-white hover:bg-white hover:text-orange-400 "
            onClick={() => {
              btnNameReact === "Log In"
                ? setbtnNameReact("Log Out")
                : setbtnNameReact("Log In");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  // const [btnNameReact, setbtnNameReact] = useState("Log In");

  const cart = useSelector((store) => store.cart);

  return (
    <div className="flex justify-between px-2 sm:px-8 bg-white shadow-lg fixed w-full z-10">
      <div className="flex justify-center items-center">
        <img
          className=" sm:w-40 sm:p-2"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
          alt="logo"
          width="100px"
        />
      </div>
      <div>
        <ul className="flex p-2 sm:p-4 gap-4 sm:gap-8 items-center font-semibold text-[#435B66]">
          <li className="hidden">
            <NavLink to="/search" className="flex items-center ">
              <SearchIcon sx={{ color: "#435B66", fontSize: "22px" }} /> Search
            </NavLink>
          </li>

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/cart">
              Cart{" "}
              <span className="text-green-400">{cart.cartTotalQuantity}</span>{" "}
            </NavLink>
          </li>
          <NavLink to="/login">
            <button
              className="px-4 py-1  bg-orange-400 rounded-lg text-white hover:bg-gray-100 hover:text-orange-400 "
              // onClick={() => {
              //   btnNameReact === "Log In"
              //     ? setbtnNameReact("Log Out")
              //     : setbtnNameReact("Log In");
              // }}
            >
              {/* {btnNameReact} */}
              Log In
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;

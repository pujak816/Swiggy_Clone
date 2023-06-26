import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Log In");

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between px-8 bg-orange-50 shadow-lg">
      <div className="{styles.logo_container}">
        <img
          className="w-40 p-2"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
          alt="logo"
          width="100px"
        />
      </div>
      <div className="{styles.nav_items}">
        <ul className="flex p-4 gap-8 items-center">
          <li>
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About US</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart <span className="text-green-400">{cartItems.length}</span>{" "}
            </Link>
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

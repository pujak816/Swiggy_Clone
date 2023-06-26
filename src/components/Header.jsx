import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Log In");

  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
          alt="logo"
          width="100px"
        />
      </div>
      <div className={styles.nav_items}>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About US</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className={styles.logIn}
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

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login pt-16 ">
      <img
        src="https://media.istockphoto.com/id/1283050796/vector/flat-design-under-construction-concept.jpg?s=612x612&w=0&k=20&c=CATQe8sEl7YdpwxZ4VHwYh5FjHY9MkbyRNhALyslZwA="
        alt="name_logo"
        className="fixed bg-cover"
      />

      <div className="bg-black/90  absolute w-full h-screen flex flex-col text-center  items-center">
        <div className="w-1/2  py-28 fixed   ">
          <div>
            <h1 className="text-3xl text-orange-500">Oops!</h1>
            <h2 className="text-2xl text-white/90">Under construction</h2>
            <p className="text-gray-500">
              We're actively working on enhancing our sign-in page to make your
              experience even better. Stay tuned for updates and improvements
              coming soon!
            </p>
          </div>
          <div className="my-4">
            <Link to="/">
              <button className="bg-orange-500 text-white rounded-xl px-4 py-[4px]">
                <p className="text-xs lg:text-sm">HOME PAGE</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

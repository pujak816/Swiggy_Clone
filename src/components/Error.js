import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <section
      className="error  flex flex-col items-center text-center w-full h-screen justify-center
    "
    >
      <h1 className="text-2xl text-orange-600">Oops!!</h1>
      <h2 className="text-lg text-black/80">Something went wrong</h2>
      <h3 className="text-2xl  ">
        {err.status}: {err.statusText}
      </h3>
      <p className="text-sm text-black/80">Refresh page</p>
    </section>
  );
};

export default Error;

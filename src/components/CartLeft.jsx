const CartLeft = () => {
  return (
    <>
      <div className="hidden w-2/4 sm:flex flex-col items-center pt-10">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
          alt="img"
        />
        <p className="p-2 my-5 sm:mx-20 text-orange-400 text-xs sm:text-lg font-semibold">
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </p>
      </div>
    </>
  );
};

export default CartLeft;

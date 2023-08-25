import { CDN_URL } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addItem, decreaseItem } from "../utils/cartSlice";
// import { useEffect } from "react";

const CartItems = ({ item }) => {
  const { name, desciption, price, defaultPrice, imageId } = item?.card?.info;

  const itemPrice = price ? price / 100 : defaultPrice / 100;
  const calculateSubtotal = () => {
    return itemPrice * item.itemQuantity;
  };

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseItem(item));
    // console.log("clicked");
  };

  return (
    <>
      <div className="flex py-4 p-10 overflow-y-auto bg-gray-100 ">
        <div className=" flex w-3/4  items-center  ">
          <img
            className="max-w-[100px]  mr-4 rounded-sm shadow-lg"
            src={CDN_URL + imageId}
            alt="img"
          ></img>
          <div className="text-sm font-semibold flex-wrap">{name}</div>
          <p>{desciption}</p>
        </div>

        <div className="border m-4 px-1 border-slate-400  w-1/6 flex justify-center items-center gap-5 font-bold ">
          <button className="text-red-600" onClick={() => handleDecrease(item)}>
            -
          </button>
          <div className="text-lime-600">{item.itemQuantity}</div>
          <button
            className="text-lime-600 hover:scale-125 "
            onClick={() => handleAdd(item)}
          >
            +
          </button>
        </div>

        <div className="w-1/4 flex flex-col justify-center text-right pr-4">
          <div>
            <p className="font-semibold text-gray-600 text-sm ">
              {/* <span className="text-green-600 hidden ">
                <p> ₹{itemPrice}</p>
                <p>{item.itemQuantity} </p>
              </span> */}
              ₹{calculateSubtotal().toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-green-600 font-semibold ">FOR TWO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;

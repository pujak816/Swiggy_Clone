import React from "react";
import { addItem, decreaseItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/helper";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function CategoryItemList({ items }) {
  console.log(items);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            Key={item.card.info.id}
            className="p-6 m-2 border-b-2 border-slate-200 flex justify-between"
          >
            <div className="text-left w-9/12">
              <div className="font-semibold text-lg">{item.card.info.name}</div>
              <div>
                <CurrencyRupeeIcon
                  sx={{
                    fontSize: 16,
                  }}
                />
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className=" text-xs text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-16 left-6">
                <button
                  className="text-xs p-2 font-bold bg-white shadow-lg  m-auto text-green-500 px-6 hover:shadow-xl hover:border-gray-800"
                  onClick={() => handleAdd(item)}
                >
                  ADD+
                </button>
              </div>
              <img
                className="w-32 rounded-md"
                src={CDN_URL + item.card.info.imageId}
                alt="img"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

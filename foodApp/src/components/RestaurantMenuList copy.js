import React, { useState, useEffect,useContext } from "react"
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenuList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

    return (
      <div className="">
      {data&&data.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex gap-10 rounded-lg shadow-md justify-between mx-auto w-[50%]"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
              <button
                className="p-2 absolute b-0 rounded-lg bg-black text-white shadow-lg bottom-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
                onClick={() => handleAddItem(item)}
              >
                Add + 
              </button>
            <img src={CDN_URL + item.card.info.imageId} alt={"item_img"} className="w-full" />
          </div>
        </div>
      ))}
    </div>
    )
}

export default RestaurantMenuList
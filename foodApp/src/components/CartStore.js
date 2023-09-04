import React, { useState, useEffect,useContext } from "react"
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { removeById } from "../utils/cartSlice";
import close_icon from "../assets/img/close_icon.png"
import { useDispatch } from "react-redux";
const CartStore = ({ data }) => {
  const dispatch = useDispatch();
console.log("finall data :: ",data)
  const handleRemoveById = (item) => {
    // Dispatch an action
    dispatch(removeById(item));
  };

    return (
      <div className="">
      {data&&data.map((item) => (
        <div
          key={item.id_Value}
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
              <img
                className="p-2 absolute w-[40px] right-[0] top-[0] cursor-pointer"
                src={close_icon}
                onClick={() => handleRemoveById(item.id_Value)}
              />
            <img src={CDN_URL + item.card.info.imageId} alt={"item_img"} className="w-full" />
          </div>
        </div>
      ))}
    </div>
    )
}

export default CartStore
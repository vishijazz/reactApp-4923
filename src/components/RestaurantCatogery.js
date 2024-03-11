import React, { useEffect, useState,useContext} from "react";
import downArrow from "../assets/img/down_arrow.png";
import UserContext from "../utils/UserContext";
import RestaurantMenuList from './CartRestaurantMenuList'
const RestaurantCatogery = ({ data, showItems, setShowIndex }) => {
  console.log("RestaurantCatogery :: props :: ", data);
  const handleClick = ()=>{
    setShowIndex();
  }
  return (
    <>
      <div className="flex justify-between mx-auto w-[50%] bg-gray-100 rounded-md px-3 py-6 items-center cursor-pointer" onClick={handleClick}>
        
        <p>{`${data?.title} (${data?.itemCards?.length})`}</p>
        <img src={downArrow} className="w-7 cursor-pointer" />
      </div>
      <div>
        {showItems&&<RestaurantMenuList data={data?.itemCards}/>}
      </div>
    </>
  );
};

export default RestaurantCatogery;

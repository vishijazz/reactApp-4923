import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData})=>{
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        availability,locality,areaName
      } = resData?.info;
    return(
    <div className="cursor-pointer m-2 p-4 w-[250px] rounded-lg shadow-md text-sm h-full">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex items-start flex-col px-4 py-3 bg-gray-100 mt-4 rounded-sm"><p className="font-bold text-sm">{name}</p><p className="font-bold bg-green-300 px-3 py-1 rounded-sm">{avgRating} stars</p></div>
      <h4 >
        <span className="font-bold truncate">Cuisines:</span> {cuisines.join(", ")}
      {/* {cuisines?.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
      </h4>
      <h4><span className="font-bold">Price: </span>{costForTwo}</h4>
      <h4><span className="font-bold">Location: </span>{locality}</h4>
      <h4><span className="font-bold">Availability: </span>{availability?.opened?"Open":"Closed"} </h4>
    </div>
    )
}

// Higher Order Component
// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <>
          <label className="absolute bg-black text-white m-1 p-1 text-sm rounded-md z-10 ">
            Flat Deal {props.resData?.info?.aggregatedDiscountInfoV3?.header}-{props.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
            {console.log("props :: ",props)}
          </label>
          <RestaurantCard {...props} />
        </>
      );
    };
  };


export default RestaurantCard;
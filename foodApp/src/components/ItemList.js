import React, { lazy, Suspense, useEffect, useState,useContext } from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_ALL_ITEMS } from "../utils/constants";
import {MOCK_RESTAURANT_JSON} from "../utils/mockRestaurantJson"
import UserContext from "../utils/UserContext";

const ItemList = () => {
  const [getAllItemList, setGetAllItemList] = useState([]);
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  const { loggedInUser,setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const data = await fetch(FETCH_ALL_ITEMS);

    //   const json = await data?.json();
    //   console.log("json :: ",json,MOCK_RESTAURANT_JSON)
      
    //   console.log("group :: ", json?.data);
    //   Optional Chaining
      setGetAllItemList(
        MOCK_RESTAURANT_JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  if (getAllItemList?.length <= 0) {
    return <Shimmer />;
  }
  return (
    <>
    <div className="flex flex-wrap justify-center gap-5 p-2">
      {getAllItemList &&
        getAllItemList?.map((ele, i) => (
              <div key={ ele?.info?.id} className="transition-transform transform hover:scale-95">
              <Link  to={"/restaurants/" +  ele?.info?.id}>
                {console.log("ele :: ", ele?.info)}
                {ele?.info?.aggregatedDiscountInfoV3?.discountTag ===
                "FLAT DEAL" ? (
                  <RestaurantCardPromoted resData={ele} />
                ) : (
                  <RestaurantCard resData={ele} />
                )}
                </Link>
              </div>
            
          
        ))}
    </div>
    </>
  );
};

export default ItemList;

import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { FETCH_RESTAURANT_MENU } from "../utils/constants";
const RestaurantMenu = (restaurantId) =>{
    const [restaurantMenuList,setRestaurantMenuList]=useState([]);
  useEffect(()=>{
    fetchRestaurantMenuList()
  },[])
  const fetchRestaurantMenuList = async () => {
    try {
        const data = await fetch(`${FETCH_RESTAURANT_MENU}${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
      const json = await data?.json();
      setRestaurantMenuList(json);
    } catch (err) {
      console.log(err);
    }
  };

  return restaurantMenuList
}
export default RestaurantMenu
import React, { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import UseRestaurantMenuList from "../customHooks/UseRestaurantMenuList";
import UserContext from "../utils/UserContext";
import RestaurantCatogery from "./RestaurantCatogery";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);
    console.log("resId :: ", resId)
    const { loggedInUser,setUserName,noOfRestaurant,setNoOfRestaurant } = useContext(UserContext);
    const restaurantMenuList = UseRestaurantMenuList(resId);


    if (!restaurantMenuList?.data?.cards[0]?.card?.card?.info) {
        return <div>Loading...</div>; // Or show a loading state or handle the error gracefully
    }

    const { name, cuisines, costForTwoMessage, areaName, city } =
        restaurantMenuList?.data?.cards[0]?.card?.card?.info;

    console.log("restaurantMenuList :: ", restaurantMenuList);
    console.log("12 :::: ", restaurantMenuList?.data?.cards[0]?.card?.card?.info);

    const filteredMenuData =
        restaurantMenuList?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c?.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log("data :: ", filteredMenuData);

    return (
        <>
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">
                    {areaName},{city}
                </p>
                <div className="flex flex-col gap-4">
                    {filteredMenuData && filteredMenuData?.map((ele, index) => (
                        < div key={`id${index}`}>
                            <RestaurantCatogery key={ele?.card?.card.title}
                                data={ele?.card?.card}
                                showItems={index === showIndex ? true : false}
                                setShowIndex={() => setShowIndex(showIndex===index?-1:index)} />
                        </div >
                    ))}
                </div>
            </div>
        </>
    );
};
export default RestaurantMenu;

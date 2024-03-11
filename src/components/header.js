import  React,{ lazy, Suspense, useEffect, useState,useContext } from "react";
import appIcon from '../assets/img/app_icon.webp'
import { Link } from "react-router-dom";
import UseOnlineStatus from "../customHooks/UseOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{
    const onlineStatus = UseOnlineStatus();
    console.log("onlineStatus :: ",onlineStatus)
    const [active,setActive]=useState(false);
    const [activeCount,setActiveCount]=useState(0);
const userDetails = useContext(UserContext)
console.log("userDetails ::::::::::",userDetails)
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
    useEffect(() => {
        setActiveCount((prev)=>prev+1)
        let timeoutId;
    
        setActive(true);
        if (onlineStatus) {
          timeoutId = setTimeout(() => {
            setActive(false);
          }, 5000);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [onlineStatus]);
    return(
        <>
        {active && activeCount > 2 && (<div className={`flex text-white justify-center px-12 py-2 ${onlineStatus?"bg-green-600":"bg-red-600 "} shadow-md sticky top-0 z-10`}><p>{onlineStatus?"Back online":"You're offline"}</p></div>)}
        <div className="flex justify-between px-12 py-2 bg-gray-100 shadow-md sticky top-0 z-50">
        <Link to="/"><div className="flex justify-between gap-1 items-center "><img src={appIcon} className='w-[100px]'/><p className="font-bold">Food Zone</p></div></Link>
            <div className="flex justify-between gap-10 items-center">
            <Link to="/"> Home</Link>
            {/* <Link to="/about"> About</Link> */}
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            <p className="text-green-700 font-bold">{userDetails.loggedInUser}</p>
            <p className="text-amber-900 font-bold">{userDetails.currentData}</p>
            </div>
        </div>
        </>
    )
}

export default Header;
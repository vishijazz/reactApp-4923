import React,{createContext} from "react";

const UserContext = createContext({
    loggedInUser:"Vishal",
    currentData:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
})

export default UserContext;
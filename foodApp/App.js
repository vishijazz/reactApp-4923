import React, { lazy, Suspense, useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
// import Body from './src/components/body';
import Header from "./src/components/header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore"
import Cart from "./src/components/Cart";
const root = ReactDOM.createRoot(document.getElementById('root'));
// lazy laoding
const Body = lazy(() => import("./src/components/body"));


const AppLayout = () => {
  const userDetails = useContext(UserContext)
  console.log("userDetails :: ",userDetails)
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "vishal",
    };
    setUserName(data.name);
  }, []);
  return (
    <React.StrictMode>
      <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName,currentData:userDetails.currentData,location:"chennai", setUserName }}>
    <Header/>
    <Outlet />
    </UserContext.Provider>
    </Provider>
  </React.StrictMode>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Body />
          </Suspense>),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
     ],
    errorElement: <Error />,
  },
]);


root.render(<RouterProvider router={appRouter} />);
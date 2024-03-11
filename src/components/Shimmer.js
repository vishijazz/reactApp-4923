import React from "react"
const Shimmer = () => {
    return (
      <>
      <div className="flex flex-wrap justify-center">
      {Array.from({ length: 10 }).map((_, index) => (
       <div key={index} className="cursor-pointer m-2 p-4 w-[250px] rounded-lg flex flex-col gap-8 shadow-md transition-transform transform hover:scale-95 text-sm">
       <div className="flex items-start flex-col px-4 py-10 bg-gray-200 mt-4 rounded-sm">
         <p className="font-bold text-sm px-50 py-2"></p>
       </div>
       <p className="font-bold bg-gray-200 px-50 py-2"></p>
       <p className="font-bold bg-gray-200 px-50 py-2"></p>
       <p className="font-bold bg-gray-200 px-50 py-2"></p>
     </div>
     
      ))}
      </div>
      </>
    );
  };
  
  export default Shimmer;
  
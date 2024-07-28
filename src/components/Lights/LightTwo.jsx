import React from "react";

export const LightTwo = ({ activeLight }) => {
  return (
    <div className="w-16 h-48 bg-gray-800 rounded-lg flex flex-col justify-around items-center p-2">
      <div
        className={`w-10 h-10 rounded-full ${
          activeLight === "red" ? "bg-red-500" : "bg-red-200"
        }`}
      ></div>
      <div
        className={`w-10 h-10 rounded-full ${
          activeLight === "yellow" ? "bg-yellow-500" : "bg-yellow-200"
        }`}
      ></div>
      <div
        className={`w-10 h-10 rounded-full ${
          activeLight === "green" ? "bg-green-500" : "bg-green-200"
        }`}
      ></div>
    </div>
  );
};

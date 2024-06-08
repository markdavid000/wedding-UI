import React from "react";
import CountDown from "../components/CountDown";

function Event() {
  return (
    <div
      className="text-white mt-36 flex flex-col items-center gap-6"
      style={{ height: "59%" }}
    >
      <h1 className="text-5xl text-center font-serif flex justify-center gap-2">
        <div className="text-pink-400 font-serif">Favour &</div>
        <div>Elvis</div>
      </h1>
      <h2 className="text-center font-serif text-3xl">
        WE ARE GETTING MARRIED JULY 27, 2024
      </h2>
      <CountDown />
    </div>
  );
}

export default Event;

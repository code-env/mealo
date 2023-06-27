import React from "react";
import Hero from "./components/Hero";
import Recipies from "./components/Recipies";
import Suggestions from "./components/Suggestions";

const page = () => {
  return (
    <div className="resize flex flex-col gap-28">
      <Hero />
      <Recipies />
      <Suggestions />
    </div>
  );
};

export default page;

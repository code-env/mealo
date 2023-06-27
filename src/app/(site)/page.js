import React from "react";
import Hero from "./components/Hero";
import Recipies from "./components/Recipies";

const page = () => {
  return (
    <div className="resize flex flex-col gap-28">
      <Hero />
      <Recipies />
    </div>
  );
};

export default page;

import React from "react";

const Recipies = () => {
  const recipies = [
    {
      image: "/images/rec1.png",
      height: 7,
      width: 5,
      alt: "tic foundation food health recipy 1",
    },
    {
      image: "/images/rec2.png",
      height: 7,
      width: 5,
      alt: "tic foundation food health recipy 2",
    },
    {
      image: "/images/rec3.png",
      height: 7,
      width: 5,
      alt: "tic foundation food health recipy 3",
    },
    {
      image: "/images/rec4.png",
      height: 7,
      width: 5,
      alt: "tic foundation food health recipy 5",
    },
    {
      image: "/images/rec5.png",
      height: 7,
      width: 5,
      alt: "tic foundation food health recipy 5",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-9">
        <h1 className="text-2xl font-medium text-center">Our Recepies</h1>
        <p className="text-2xl font-medium">Explore</p>
      </div>
      <div className="flex flex-wrap"></div>
    </div>
  );
};

export default Recipies;

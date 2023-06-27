import React from "react";
import Layer from "./Layer";

const Suggestions = () => {
  const suggestions = [
    {
      image: "/images/sug1.png",
      alt: "tic foundation food health user suggestion",
      height: 239,
      width: 361,
    },
    {
      image: "/images/sug2.png",
      alt: "tic foundation food health user suggestion",
      width: 264,
      height: 239,
    },
    {
      image: "/images/sug3.png",
      alt: "tic foundation food health user suggestion",
      height: 528,
      width: 458,
    },
    {
      image: "/images/sug4.png",
      alt: "tic foundation food health user suggestion",
      height: 239,
      width: 361,
    },
    {
      image: "/images/sug5.png",
      alt: "tic foundation food health user suggestion",
      width: 264,
      height: 239,
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium text-center">
        Suggestions From Experts
      </h1>

      <div className="flex flex-wrap gap-1 ">
        {suggestions.map((sug, index) => (
          <Layer
            image={sug.image}
            alt={sug.alt}
            key={index}
            height={sug.height}
            width={sug.width}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;

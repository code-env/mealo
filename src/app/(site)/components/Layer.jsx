import React from "react";
import Image from "next/image";

const Layer = ({ image, height, width, alt }) => {
  return (
    <div
      style={{
        width: width ? width : 300,
        height: height,
      }}
      className="relative rounded-md overflow-hidden bg-black"
    >
      <Image
        src={image}
        fill
        alt={alt}
        className="rounded-md overflow-hidden hover:scale-110 transition-all cursor-pointer"
      />
    </div>
  );
};

export default Layer;

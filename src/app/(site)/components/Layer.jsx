import React from "react";
import Image from "next/image";

const Layer = ({ image, height, width, alt }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
    >
      <Image src={image} fill alt={alt} />
    </div>
  );
};

export default Layer;

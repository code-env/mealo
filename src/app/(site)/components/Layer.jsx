import React from "react";
import Image from "next/image";

const Layer = ({ image, height, width, alt }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className="relative rounded-md overflow-hidden"
    >
      <Image
        src={image}
        fill
        alt={alt}
        className="rounded-md overflow-hidden"
      />
    </div>
  );
};

export default Layer;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="resize py-4 b-blue  text-white">
      <div className="w-full flex items-center relative b">
        <div
          className="cursor-pointer bg-white
        py-2 px-4 rounded-md"
        >
          <Image
            src="/images/logo.png"
            alt="tic foundation food health platform"
            height={50}
            width={120}
          />
        </div>

        <p className="text-base absolute bottom-0 mx-auto left-0 right-0 text-white/80 text-center">
          2023 Food - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

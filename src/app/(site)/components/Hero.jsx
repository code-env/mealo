import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen pt-28">
      <div className="flex w-full relativ justify-between">
        <div className="left flex-1 ">
          <h1 className="mt-16">
            <span className="this">eat</span>
            <br />
            <span className="font-bold t-blue text-[100px] leading-[100px] pl-24">
              {" "}
              HEALTHY
            </span>
            <br />
            <span className="this">Stay</span>
          </h1>
          <div className="div w-[450px] mt-8 flex flex-col gap-8">
            <p className="t-col">
              Lorem ipsum dolor sit amet consectetur. Cursus ipsum leo viverra
              integer nisl aliquet quam. Porttitor nunc ut aenean pellentesque
              accumsan. Tincidunt lacus leo dui at tortor. Elementum aliquet in
              aenean elementum feugiat etiam viverra non. Fusce cursus laoreet
              odio fringilla amet bibendum. Vel etiam ultrices elementum
              egestas. Faucibus morbi.
            </p>

            <button className="b-blue px-10 py-2 w-fit text-white font-bold rounded-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="right relative flex-1 flex justify-end">
          <div className="img">
            <Image
              width={470}
              height={403}
              alt="the tic foundation food health landing page image"
              src="/images/landing.png"
            />
          </div>
          <div className="mg absolute -bottom-[100px] -left-[75px]">
            <Image
              width={255}
              height={356}
              alt="the tic foundation food health landing page image"
              src="/images/land.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

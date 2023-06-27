import Image from "next/image";
import React from "react";

const Header = () => {
  const routes = [
    {
      label: "Home",
    },
    {
      label: "Recipies",
    },
    {
      label: "Suggestions",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <header className="w-full h-16 items-center resize fixed top-0 bg-white z-50">
      <nav className="flex w-full justify-between items-center h-full">
        <div className="cursor-pointer">
          <Image
            src="/images/logo.png"
            alt="tic foundation food health platform"
            height={50}
            width={120}
          />
        </div>
        <ul className="flex items-center gap-8">
          {routes.map((route, index) => (
            <li
              key={index}
              className="font-bold cursor-pointer hover:opacity-75 transition-all"
            >
              {route.label}
            </li>
          ))}

          <li className="font-bold cursor-pointer hover:opacity-75 transition-all bg-gradient px-10 py-2 text-white rounded-sm">
            Get Tips
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

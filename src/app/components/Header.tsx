import React from "react";
import Link from "next/link";
import LanguageDropDown from "./LanguageDropDown";

function Header() {
  return (
    <>
      <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4">
        <h2 className="text-[24px] font-bold">Food<span className="text-[#FF9F0D]">Tuck</span></h2>
      </header>
    </>
  );
}

export default Header;

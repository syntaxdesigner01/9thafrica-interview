"use client";
import Image from "next/image";
import React from "react";
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("container");
      const account = document.getElementById("account");
      const logo = document.getElementById("logo");
      const input = document.querySelector("input");
      const nav = document.querySelector("nav");

      if (window.scrollY > 50) {
        container.className =
          "w-[90vw] px-10 sticky top-0 z-50 flex justify-evenly  items-center transition-width duration-300 px-20 rounded-x-full";
        input.className =
          "rounded-md outline-none h-10 w-[40vw] pl-5 placeholder:italic placeholder:text-sm";
        logo.className = "w-50 h-50";
        account.className = "hidden";
        nav.className =
          "rounded-xl mt-4 bg-white shadow-md h-20 px-10 flex items-center justify-between sticky top-0 z-50 w-full transition-width duration-300";
      } else {
        container.className =
          "w-full sticky top-0 z-50  transition-width duration-300 px-0";
        input.className =
          "rounded-md outline-none px-2 h-10 w-full pl-5 placeholder:italic placeholder:text-sm";
        account.className = "block";
        nav.className =
          " bg-white shadow-md h-20 px-10 flex items-center justify-between sticky top-0 z-50 w-full transition-width duration-300";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="container"
      className="w-full sticky top-0 z-50 flex justify-center items-center px-0"
    >
      <nav className="rounded-xl bg-white shadow-md h-20 px-10 flex items-center justify-between sticky top-0 z-50 w-full transition-width duration-300">
        <section className="flex items-center space-x-4">
          <MdMenu className="text-lg rounded-md border-2 border-black h-10 w-10 " />
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            id="logo"
          />
        </section>
        <section className="w-[40vw]">
          <form action="" className="w-full">
            <section className="flex items-center gap-2 border-2  rounded-md">
              <input
                type="search"
                className="  h-10 w-full pl-5 placeholder:italic placeholder:text-sm outline-none"
                placeholder="Search for items..."
              />
              <CiSearch className="bg-primary text-white font-semibold h-10 w-20 rounded-r-md text-10" />
            </section>
          </form>
        </section>

        <section className="flex items-center gap-x-10">
          <section className="relative" id="account">
            <h1
              className="flex  items-center gap-2 font-semibold text-md"
              onMouseEnter={() => setShowDropdown(true)}
            >
              <FaUser className="text-xl" />
              Account
            </h1>
            {showDropdown && (
              <section
                className=" top-16 py-4 flex flex-col justify-center items-center z-50 bg-white shadow-xl rounded-md border border-s-lime-50 w-[15vw] right-[5vw] absolute px-4 gap-2"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="font-bold bg-primary py-2 rounded-md text-white w-full ">
                  Login
                </button>
                <button className="font-bold bg-black py-2 rounded-md text-white w-full ">
                  Sign up
                </button>
              </section>
            )}
          </section>

          <section className="flex  items-center gap-2 font-semibold relative">
            <span className="absolute top-[-1vh] left-4 p-2 bg-black text-white h-5 w-5 text-sm flex justify-center items-center rounded-full">
              0
            </span>
            <section className="flex items-center gap-2">
              <TiShoppingCart className="text-3xl" />
              Cart
            </section>
          </section>
        </section>
      </nav>
    </section>


  );
}

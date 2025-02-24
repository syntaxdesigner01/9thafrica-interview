'use client'
import Image from 'next/image';
import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <nav className="bg-white shadow-md h-20 px-10 flex items-center justify-between">
      <section className="flex items-center space-x-4">
        <MdMenu className="text-lg rounded-md border-2 border-black h-10 w-10 " />
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </section>

      <section className="w-[40vw]">
        <form action="" className="w-full">
          <input
            type="search"
            className="rounded-md border-2 px-2 border-black h-10 w-full pl-5 placeholder:italic placeholder:text-sm"
            placeholder="Search for items..."
          />
        </form>
      </section>

      <section className="flex items-center gap-x-10">
        <section className="relative">
          <h1
            className="flex  items-center gap-2 font-semibold text-md"
            onMouseEnter={() => setShowDropdown(true)}
          >
            <FaUser className="text-xl" />
            Account
          </h1>
          {showDropdown && (
            <section
              className=" top-8 py-4 flex flex-col justify-center items-center z-50 bg-white shadow-xl rounded-md border border-s-lime-50 w-[15vw] left-[-4vw] absolute px-4 gap-2"
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
          <span className='absolute top-[-1vh] left-4 p-2 bg-black text-white h-5 w-5 text-sm flex justify-center items-center rounded-full'>0</span>
          <section className='flex items-center gap-2'>
            <TiShoppingCart className="text-3xl" />
            Cart
          </section>
        </section>
      </section>
    </nav>
  );
}

//install react-icons
//npm install react-icons
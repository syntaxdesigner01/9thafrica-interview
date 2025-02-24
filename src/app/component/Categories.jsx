"use client";
import React from "react";
import { MdOutlineSell } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
export default function Categories() {
//   React.useEffect(() => {
//     const handleScroll = () => {
//       const category = document.getElementById("category");

//       if (window.scrollY > 50) {
//         category.className = "hidden";
//       } else {
//         category.className = "flex";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
  return (
    <section className="flex justify-center items-center  " id="category">
      <ul className="flex justify-evenly items-center w-[70vw] capitalize bg-white mt-4 h-20">
        <li className="flex items-center gap-x-2 text-primary ">
          <MdOutlineSell />
          marketplace
        </li>
        <li className="flex items-center gap-x-2 hover:text-primary ">
          <PiBuildingOffice />
          Wholesale
        </li>
        <li className="flex items-center gap-x-2 hover:text-primary ">
          <GrUserWorker />
          hire a professional
        </li>
        <li className="flex items-center gap-x-2 hover:text-primary ">
          <HiLocationMarker />
          Real Estate
        </li>
        <li className="flex items-center gap-x-2 hover:text-primary ">
          <TbTruckDelivery />
          Logistics
        </li>
      </ul>
    </section>
  );
}

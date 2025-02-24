import React from 'react'
import { MdOutlineSell } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
export default function Categories() {
  return (
    <section className="flex justify-center items-center  ">
      <ul className="flex justify-evenly items-center w-[70vw] capitalize bg-white mt-4 h-20">
        <li className="flex items-center gap-x-2">
          <MdOutlineSell />
          marketplace
        </li>
        <li className="flex items-center gap-x-2">
          <PiBuildingOffice />
          Wholesale
        </li>
        <li className="flex items-center gap-x-2">
          <GrUserWorker />
          hire a professional
        </li>
        <li className="flex items-center gap-x-2">
          <HiLocationMarker />
          Real Estate
        </li>
        <li className="flex items-center gap-x-2">
          <TbTruckDelivery />
          Logistics
        </li>
      </ul>
    </section>
  );
}

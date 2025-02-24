import React from 'react'
import { MdPhoneAndroid } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
export default function TopNav() {
  return (
    <section className="px-20 py-4">
      <ul className="text-sm flex text-slate-500 justify-evenly font-semibold w-[30vw] capitalize gap-10">
        <li>about us</li>
        <li className="flex gap-2 items-center">
          <FaShippingFast />
          track order
        </li>
        <li className="flex gap-2 items-center">
          <MdPhoneAndroid />
          +1 123 456 7890
        </li>
      </ul>
    </section>
  );
}

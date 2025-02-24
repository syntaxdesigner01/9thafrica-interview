import React from 'react'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
export default function Assurence() {
  return (
    <section className="px-20 pb-20 flex gap-4">
      <section className="py-6 w-[30vw] bg-white shadow-md border-b-2 border-s-lime-50 flex  items-center gap-4 rounded-xl  px-10 ">
        <FaMoneyCheckDollar className="text-4xl" />
        <section className="flex flex-col ">
          <h1 className="font-semibold text-xl ">Payments Guaranteed</h1>
          <p className='text-black/75'>Enjoy secure & safe Payments</p>
        </section>
      </section>

      <section className="py-6 w-[30vw] bg-white shadow-md border-b-2 border-s-lime-50 flex  items-center gap-4 rounded-xl  px-10 ">
        <GrUserWorker className="text-4xl" />
        <section className="flex flex-col ">
          <h1 className="font-semibold text-xl ">Quality Products</h1>
          <p className='text-black/75'>Vetted & SON certified.</p>
        </section>
      </section>

      <section className="py-6 w-[30vw] bg-white shadow-md border-b-2 border-s-lime-50 flex  items-center gap-4 rounded-xl  px-10 ">
        <IoMdTime className="text-4xl" />
        <section className="flex flex-col ">
          <h1 className="font-semibold text-xl ">Timely Delivery</h1>
          <p className='text-black/75'>Nation-wide service</p>
        </section>
      </section>
    </section>
  );
}

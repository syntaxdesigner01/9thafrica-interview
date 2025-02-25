'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function DisplayArea() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollbarStyles = {
    overflowX: "auto",
    msOverflowStyle: "none", 
    scrollbarWidth: "none", 
  };

  return (
    <section className="bg-white w-full p-4 h-[70vh] shadow-md border-b border-x-lime-50 rounded-xl">
      <h1 className="text-2xl p-4">New Arrival</h1>
      <div className="relative overflow-x-hidden">
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded"
        >
          <FaChevronRight className="text-xl" />
        </button>
        <section
          ref={scrollRef}
          style={scrollbarStyles}
          className="flex gap-4 mt-4 w-[300vw] h-[45vh] transition-transform duration-300"
        >
          {[...Array(10)].map((_, index) => (
            <section
              key={index}
              className="border-2  border-x-lime-50 rounded-xl  hover:shadow-2xl hover:border-x-lime-100"
            >
              <Image
                src={"/items/img1.webp"}
                alt=""
                width={200}
                height={200}
                className="rounded-t-xl w-full"
              />
              <section className="p-2 py-4 flex flex-col gap-2 rounded-b-xl">
                <h1 className="text-md">Blender/Juicer</h1>
                <p className="text-sm font-semibold">$100</p>
                <p className="text-[12px]">
                  Sold by <span className="text-red-600">Mimi Store</span>
                </p>
              </section>
            </section>
          ))}
        </section>
      </div>
    </section>
  );
}

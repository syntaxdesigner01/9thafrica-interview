"use client";
import Image from "next/image";
import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DisplayArea() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next relative" onClick={onClick}>
        <FaChevronRight className="text-3xl absolute  top-[-0.2em] left-[-0.8em] h-10 w-10 rounded-full shadow-md bg-white p-2 text-black" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev z-50 relative " onClick={onClick}>
        <FaChevronLeft className="text-3xl absolute top-[-0.2em] right-[-0.8em] h-10 w-10 rounded-full shadow-md bg-white p-2 text-black" />
      </div>
    );
  };
  const settings = {
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const items = [...Array(10)].map((_, index) => ({
    id: index,
    title: "Blender/Juicer",
    price: "$100",
    seller: "Mimi Store",
    imageUrl: "/items/img1.webp",
  }));

  return (
    <section className="bg-white w-full p-4 h-[70vh] shadow-md border-b border-x-lime-50 rounded-xl">
      <h1 className="text-2xl p-4">New Arrival</h1>

      <Slider {...settings}>
        {items.map((item) => (
          <section
            key={item.id}
            className="border-2 border-x-lime-50 rounded-xl mx-1 hover:shadow-2xl hover:border-x-lime-100"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={200}
              height={200}
              className="rounded-t-xl w-full"
            />

            <section className="p-2 py-4 flex flex-col gap-2 rounded-b-xl">
              <section className="flex justify-between items-center">
                <h1 className="text-md">{item.title}</h1>
                <section className=" rounded-full bg-white p-1 z-50">
                  <div className="flex justify-end items-end w-full">
                    <CiHeart className="" />
                  </div>
                </section>
              </section>
              <p className="text-sm font-semibold">{item.price}</p>
              <p className="text-[12px]">
                Sold by <span className="text-red-600">{item.seller}</span>
              </p>
            </section>
          </section>
        ))}
      </Slider>
    </section>
  );
}

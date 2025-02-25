"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DisplayArea({
  contentTitle,
  imageUrl,
  contentTitleColor,
}) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {}, [showScroll]);

  const NextArrow = (props) => {
    const { onClick } = props;
    return showScroll ? (
      <div
        className="slick-arrow slick-next relative transition-opacity duration-300 ease-in-out"
        onClick={onClick}
        style={{ opacity: showScroll ? 1 : 0 }}
      >
        <FaChevronRight className="text-3xl absolute top-[-0.2em] left-[-0.8em] h-10 w-10 rounded-full shadow-md bg-white p-2 text-black" />
      </div>
    ) : null;
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return showScroll ? (
      <div
        className="slick-arrow slick-prev z-50 relative transition-opacity duration-300 ease-in-out"
        onClick={onClick}
        style={{ opacity: showScroll ? 1 : 0 }}
      >
        <FaChevronLeft className="text-3xl absolute top-[-0.2em] right-[-0.8em] h-10 w-10 rounded-full shadow-md bg-white p-2 text-black" />
      </div>
    ) : null;
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
  }));

  return (
    <section>
      <section
        className={`flex w-full justify-between items-center bg-lime-100 ${
          contentTitleColor ? contentTitleColor : "bg-lime-100 "
        } p-4 mb-1`}
      >
        <h1 className="text-2xl font-semibold">{contentTitle}</h1>
        <button className="bg-primary text-white px-4 rounded-md py-2 font-semibold">
          View all
        </button>
      </section>

      <section
        onMouseEnter={() => {
          setShowScroll(true);
        }}
        onMouseLeave={() => {
          setShowScroll(false);
        }}
      >
        <Slider {...settings}>
          {items.map((item) => (
            <section
              key={item.id}
              className="rounded-xl border-2 mx-4 hover:shadow-2xl hover:z-50 hover:border-x-lime-100"
            >
              <Image
                src={imageUrl}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-t-xl w-full"
              />

              <section className="p-2 py-4 flex flex-col gap-2 rounded-b-xl">
                <section className="flex justify-between items-center">
                  <h1 className="text-md">{item.title}</h1>
                  <section className="rounded-full bg-white p-1 z-50">
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
    </section>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Banner() {
  //   const bannerList = [
  //     <Image
  //       src={"/banner1.jpg"}
  //       alt="banner1"
  //       width={500}
  //       height={500}
  //       className="w-[80vw] h-[60vh]"
  //     />,
  //     <Image
  //       src={"/banner2.jpg"}
  //       alt="banner1"
  //       width={500}
  //       height={500}
  //       className="w-[80vw] h-[60vh]"
  //     />,
  //     <Image
  //       src={"/banner3.jpg"}
  //       alt="banner1"
  //       width={500}
  //       height={500}
  //       className="w-[80vw] h-[60vh]"
  //     />,
  //     <Image
  //       src={"/banner4.jpg"}
  //       alt="banner1"
  //       width={500}
  //       height={500}
  //       className="w-[80vw] h-[60vh]"
  //     />,
  //   ];
  return (
    <section className="pt-10 flex justify-center items-center w-full pb-20">
      {/* <section className="carousel-container">
        <AliceCarousel
          mouseTracking
          items={bannerList}
          autoPlay
          autoPlayInterval={6000}
          //   fadeOutAnimation
          disableButtonsControls
          infinite
          animationType="fadeout"
          animationDuration={1000}
          activeIndex={1}
          responsive={{
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 1 },
          }}
        />
      </section> */}

      <Image
        src={"/banner3.jpg"}
        alt="banner1"
        width={500}
        height={500}
        className="w-[60vw] h-[60vh]"
      />
    </section>
  );
}

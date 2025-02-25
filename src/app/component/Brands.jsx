import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
export default function Brands() {
 
  const brandsImage = [...Array(6)].map((_, index) => ({
    id: index + 1, 
    imageUrl: `/brands/brand${index + 1}.webp`, 
  }));

  return (
    <section className="bg-white w-full shadow-md border-b border-x-lime-50 rounded-md flex flex-col gap-4 mb-10">
      <h1 className="text-center font-bold text-3xl py-10">Our Partners</h1>
      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="right">
        <section className="flex items-center gap-10 justify-center w-full shadow-xl rounded-md pb-10">
          {brandsImage.map((brand) => (
            <Image
              key={brand.id}
              src={brand.imageUrl}
              alt={`brand${brand.id}`}
              width={300}
              height={300}
              className="border-2 w-[12vw] h-[20vh] p-2 shadow-xl border-b-lime-100 rounded-xl 
              hover:scale-105"
            />
          ))}
        </section>
      </Marquee>
    </section>
  );
}

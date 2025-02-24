"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 2000,
    color: "red",
    gap: 30,
  };
  return (
    <section className="pt-10 flex justify-center items-center w-full pb-20">
      <div className="w-full max-w-[80vw]">
        <Slider {...settings}>
          <section>
            <Image
              src="/banner2.jpg"
              alt="A beautiful landscape view"
              width={700}
              height={700}
              className="w-full h-auto object-cover shadow-md border-b-lime-50 rounded-md"
            />
          </section>
          <section>
            <Image
              src="/banner1.jpg"
              alt="A beautiful landscape view"
              width={700}
              height={700}
              className="w-full h-auto object-cover shadow-md border-b-lime-50 rounded-md"
            />
          </section>
          <section>
            <Image
              src="/banner3.jpg"
              alt="A beautiful landscape view"
              width={700}
              height={700}
              className="w-full h-auto object-cover shadow-md border-b-lime-50 rounded-md"
            />
          </section>
          {/* <section>
            <Image
              src="/banner4.jpg"
              alt="A beautiful landscape view"
              width={700}
              height={700}
              className="w-full h-[70vh] object-cover shadow-md border-b-lime-50 rounded-md"
            />
          </section> */}
        </Slider>
      </div>
    </section>
  );
}

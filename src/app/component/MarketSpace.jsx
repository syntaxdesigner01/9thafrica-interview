import React from 'react'
import DisplayArea from './DispalyArea';

export default function MarketSpace() {
  return (
    <section className="bg-white w-full p-4  shadow-md border-b border-x-lime-100 rounded-md flex flex-col gap-4 mb-10">
      <DisplayArea contentTitle={"New Arrival"} imageUrl={"/items/img1.webp"} />
      {/* <DisplayArea contentTitle={"New Arrival"} imageUrl={"/items/img3.webp"} /> */}
      <DisplayArea
        contentTitle={"Top Rated"}
        imageUrl={"/items/im3.webp"}
        contentTitleColor={"bg-orange-100"}
      />
      {/* <DisplayArea contentTitle={"Top Rated"} imageUrl={"/items/img5.webp"} /> */}
    </section>
  );
}

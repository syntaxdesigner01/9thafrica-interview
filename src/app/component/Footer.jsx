import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section>
      <footer className="bg-[#313133] text-white  w-full px-20 py-10">
        <section className="flex justify-evenly   w-full ">
          <section className="">
            <Image src={"/logo2.webp"} alt="logo" width={200} height={200} />

            <p className="py-4 ">
              The ultimate marketplace for <br /> Professionals, Building
              Materials <br /> and more.
            </p>
          </section>
          <section>
            <h1 className="font-semibold">Join Us</h1>

            <ul className="flex flex-col py-4 text-sm gap-2">
              <li>Careers</li> <li>Become a Merchant</li> <li>Delivery hub</li>
            </ul>
          </section>
          <section>
            <h1 className="font-semibold">About us</h1>
            <ul className="flex flex-col py-4 text-sm gap-2">
              <li>About Us</li> <li>Terms & Conditions</li>
              <li>Privacy Polices</li>
              <li>Payment</li>
            </ul>
          </section>
          <section>
            <h1 className="font-semibold">More Info</h1>

            <ul className="flex flex-col py-4 text-sm gap-2">
              <li>Customer Register</li> <li>Customer Login</li>
              <li>Vendor Register</li>
              <li>Vendor Login</li>
            </ul>
          </section>
          <section>
            <h1 className="font-semibold">Need Help</h1>
            <ul className="flex flex-col py-4 text-sm gap-2">
              <li>FAQs</li> <li>24/7 Support</li>
              <li>Live Chat</li>
              <li>Our Blog</li>
              
            </ul>
          </section>
        </section>
      </footer>

      <section>
        <p className="text-center text-sm p-4">
          &copy; 2025 9th African Market. All rights reserved.
        </p>
      </section>
    </section>
  );
}

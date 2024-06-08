import React, { useState } from "react";

// icons
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CountDown from "../components/CountDown";
import Modal from "../components/Modal";
// import Img from "../img/allinone2.jpeg";
function OurTeams() {
  const [modalOpen, setModalOpen] = useState(false);
  const gifts = [
    {
      id: "1",
      img: "https://images-cdn.ubuy.co.in/633f809668bea75d934ef1a5-ubuy-online-shopping.jpg",
      name: "Necklace",
      price: "800000",
    },
    {
      id: "2",
      img: "https://ae01.alicdn.com/kf/S933660c8505d49c88fde14cbea0cede75.jpg_640x640Q90.jpg_.webp",
      name: "Gold Watch",
      price: "800000",
    },
    {
      id: "3",
      img: "https://www.cartrollers.com/wp-content/uploads/2021/10/IMG-20211016-WA0027.jpg",
      name: "Versace Shoe",
      price: "800000",
    },
    {
      id: "4",
      img: "https://idevices.com.ng/media/images/1634584510_1668189_iddgriV.jpg",
      name: "Mac Book",
      price: "800000",
    },
    {
      id: "5",
      img: "https://cellucity.co.za/wp-content/uploads/2023/09/iPhone-15-Pro-Max-Blue-Titanium-1.jpg",
      name: "Iphone 15 Pro Max",
      price: "800000",
    },
  ];

  return (
    <>
      <div
        className="text-white mt-36 flex flex-col items-center gap-6"
        style={{ height: "59%" }}
      >
        <h1 className="text-5xl text-center font-serif flex justify-center gap-2">
          <div className="text-pink-400 font-serif">Favour &</div>
          <div>Elvis</div>
        </h1>
        <h2 className="text-center font-serif text-3xl">
          WE ARE GETTING MARRIED JULY 27, 2024
        </h2>
        <CountDown />
      </div>

      <div className="pb-12">
        <h1 class="font-dmserif text-3xl text-center font-bold text-white mb-8">
          Gifts
        </h1>
        <div className="text-center flex justify-center">
          <div className="grid grid-col-1 lg:grid-cols-3 justify-center gap-4">
            {gifts.map((item) => (
              <div
                key={item.idid}
                class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div class="h-96 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    {item.name}
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.price}
                  </p>
                  <button
                    onClick={() => {
                      setModalOpen(item.id);
                    }}
                    class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
                    Send Gift
                  </button>
                </div>
                {modalOpen === item.id && (
                  <Modal setOpenModal={setModalOpen} item={item} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black pb-10">
          <h1 className="text-2xl pt-10 text-center font-serif flex justify-center gap-2">
            <div className="text-pink-400 font-serif">Favour &</div>
            <div>Elvis</div>
          </h1>
          <h3 className="text-2xl text-center pt-10 font-serif">
            We can’t wait to see all of our beloved friends and <br /> relative
            s at our wedding.
          </h3>
          <div className="flex items-center justify-center gap-10 mt-10">
            <BsFacebook
              className="text-5xl bg-pink-500 p-2"
              style={{ borderRadius: "50px" }}
            />
            <RiWhatsappFill
              className="text-5xl bg-pink-500 p-2"
              style={{ borderRadius: "50px" }}
            />
            <FaInstagramSquare
              className="text-5xl bg-pink-500 p-2"
              style={{ borderRadius: "50px" }}
            />
            <FaXTwitter
              className="text-5xl bg-pink-500 p-2"
              style={{ borderRadius: "50px" }}
            />
          </div>
          <div
            className="bg-pink-500 mt-10 m-auto text-center p-3"
            style={{ width: "50%", borderRadius: "20px" }}
          >
            <p className="font-serif text-black" style={{ fontSize: "17px" }}>
              &Copyright 2024 | #theBBlovestory | All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeams;

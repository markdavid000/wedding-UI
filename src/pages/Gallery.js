import React from "react";

import allinone from "../img/allinone.jpeg";
import allinone1 from "../img/allinone1.jpeg";
import allinone2 from "../img/allinone2.jpeg";
import allinone3 from "../img/allinone3.jpeg";
import allinone4 from "../img/allinone4.jpeg";
import allinone5 from "../img/allinone5.jpeg";

import marry1 from "../img/marry1.jpeg";
import marry2 from "../img/marry2.jpeg";
import marry3 from "../img/marry3.jpeg";
import marry4 from "../img/marry4.jpeg";
import marry5 from "../img/marry5.jpeg";
import marry6 from "../img/marry6.jpeg";
import marry7 from "../img/marry7.jpeg";
import marry8 from "../img/marry8.jpeg";
import marry9 from "../img/marry9.jpeg";
import marry10 from "../img/marry10.jpeg";
import marry11 from "../img/marry11.jpeg";
import marry12 from "../img/marry12.jpeg";
import marry13 from "../img/marry13.jpeg";
import marry15 from "../img/marry15.jpeg";
import marry17 from "../img/marry17.jpeg";

// icons
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CountDown from "../components/CountDown";

function Gallery() {
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

      <div>
        <section className="bg-black mt-0" id="couples">
          <h2 className="text-center text-black font-serif text-4xl pb-10">
            Gallery
          </h2>
          <h1 className="text-center text-black font-serif text-5xl pb-10">
            Captured Moments
          </h1>
          <div
            className="flex items-center justify-center "
            style={{
              width: "80%",
              flexWrap: "wrap",
              margin: "auto",
              padding: "10px",
              gap: "10px",
            }}
          >
            <img src={allinone} width={400} alt="five pics" />
            <img src={allinone2} width={400} alt="five pics" />
            <img src={allinone1} width={400} alt="five pics" />
            <img src={allinone3} width={400} alt="five pics" />
            <img src={allinone4} width={400} alt="five pics" />
            <img src={allinone5} width={400} alt="five pics" />
            <img src={marry1} width={400} alt="five pics" />
            <img src={marry2} width={400} alt="marry" />
            <img src={marry3} width={400} alt="marry" />
            <img src={marry4} width={400} alt="marry" />
            <img src={marry5} width={400} alt="marry" />
            <img src={marry6} width={400} alt="marry" />
            <img src={marry7} width={400} alt="marry" />
            <img src={marry8} width={400} alt="marry" />
            <img src={marry9} width={400} alt="marry" />
            <img src={marry10} width={400} alt="marry" />
            <img src={marry11} width={400} alt="marry" />
            <img src={marry12} width={400} alt="marry" />
            <img src={marry13} width={400} alt="marry" />
            <img src={marry15} width={400} alt="marry" />
            <img src={marry17} width={400} alt="mary" />
          </div>
        </section>
      </div>

      {/* footer */}
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

export default Gallery;

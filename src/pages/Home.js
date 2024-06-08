import React from "react";
import newFaver from "../img/newFaver.png";
import { Fireworks } from "fireworks/lib/react";

import { useState, useEffect } from "react";

import elvis42 from "../img/elvis42.jpeg";
import elvis5 from "../img/elvis5.jpeg";
import marry1 from "../img/marry1.jpeg";
import allinone from "../img/allinone.jpeg";
import allinone1 from "../img/allinone1.jpeg";
import allinone2 from "../img/allinone2.jpeg";
import allinone3 from "../img/allinone3.jpeg";
import allinone4 from "../img/allinone4.jpeg";
import allinone5 from "../img/allinone5.jpeg";
import onlyElvis from "../img/onlyElvis.png";

import lastbg from "../img/lastbg.jpeg";

import jhun from "../img/jhun.jpeg";
import promise from "../img/promise.jpeg";
import adoge from "../img/adoge.jpeg";
import bf from "../img/bf.jpeg";
import yinka from "../img/yinka.jpeg";
import yf from "../img/yf.jpeg";
import idm from "../img/idm.jpeg";

// icons
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CountDown from "../components/CountDown";

function Home() {
  const bodybg = {
    backgroundImage:
      'linear-gradient(to bottom, #00000092, #00000092), url("https://bayanandben.com/wp-content/uploads/2024/04/bggg.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    objectFit: "cover",
  };

  const lastbgCon = {
    backgroundImage: `${lastbg}`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "cover",
    backgroundSize: "cover",
    width: "100%",
    objectFit: "cover",
  };

  const date = [
    {
      id: "product-1",
      title: "First Meet",
      text: `Immediately after the proposal we already picked a month and a date for our wedding.

      We will be walking down the Aisle to say I do on the 18th of May 2024. 
      
      #theBBlovestory`,
      img: elvis5,
    },
    {
      id: "product-2",
      title: "First Date",
      text: `Hehehe, we stayed as friends from 2018 with a lot of back and forth with contact and communication, 
      so there was actually no official first date, we hung outs, visits and gists.`,
      img: elvis42,
    },
    {
      id: "product-3",
      title: "Proposal",
      text: `Susan, Kside and Ben, the Masterminders. haha
      Ben invited me to his KINGSMEN (friends) end of the year dinner at Bombay2Beirut Restaurant Wuse.
      
      He convinced me that all his friend will be there with their partners and he doesn’t want to be left out. Little did I know I was going to work into a room filled with my friends and sisters who I weren’t expecting, not even a clue.
      
      He popped the question and I said yes to forever on the 3rd of December 2023, three days to my birthday.
      It was one of the biggest surprises of my life.`,
      img: marry1,
    },
    {
      id: "product-4",
      title: "Our Wedding",
      text: `Was at the SPAR (park & shop) Wuse II, at the time I (Bayan) had a contract job I was doing there. Ben came with Anna his friend to see my colleague then, we all just exchanged pleasantries the first day and they left
      Days later they came again and this time he asked for my name, but didn’t believe the name I told him so he requested for my Facebook username smh.
      After a week or so Facebook notification popped up on my phone and it was a message from an unknown Ben Okpancho. I’d totally forgotten I met with him.
      We got acquainted and officially started dating in 2020 and voila we are here and about to take our vows.`,
      img: allinone5,
    },
  ];

  const [toggled, setToggled] = useState(false);

  let fxProps = {
    count: 3,
    interval: 200,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  const [time, setTime] = useState("");
  console.log(time);
  useEffect(() => {
    let countDownDete = new Date("jen 10, 2024 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDete - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + " d" + hours + "h" + minutes + "m" + seconds + "s");

      if (distance < 0) {
        clearInterval(x);
        setTime("THE WEDDING IS ALL MOST DONE THANKS FOR CHICKING IN");
      }
    }, 1000);
  }, []);

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

      <div className="p-10" style={bodybg}>
        <h1 className="text-white text-center p-7 text-4xl font-serif mb-10">
          Favour & Elvis Life Story
          {/* <Fireworks {...fxProps} /> */}
        </h1>

        <div
          className="flex flex-col lg:flex-row justify-center text-center items-center gap-4"
          style={{
            width: "100%",
            margin: "auto",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <div style={{ width: "100%" }} className="flex justify-center">
            <img src={newFaver} alt="onlyFavorIMG" />
          </div>
          <div className="" style={{ width: "100%" }}>
            <h1 className="text-pink-500 text-4xl mt-4 pb-2 font-serif">
              Favour
            </h1>
            <p className="text-white text-2xl font-serif">
              Bayan is a graduate of biochemistry dedicated to advancing her
              knowledge in molecular biology and family nursing practice. Beyond
              her scientific pursuits, Bayan has a deep love for working with
              children
            </p>
          </div>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row justify-between gap-4 text-center"
          style={{
            width: "100%",
            margin: "auto",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <div style={{ width: "100%" }}>
            <h1 className="text-white text-4xl mt-4 lg:mt-16 pb-2 font-serif">
              Elvis
            </h1>
            <p className="text-white text-2xl font-serif">
              Bayan is a graduate of biochemistry dedicated to advancing her
              knowledge in molecular biology and family nursing practice. Beyond
              her scientific pursuits, Bayan has a deep love for working with
              children
            </p>
          </div>

          <div style={{ width: "100%" }} className="flex justify-center">
            <img src={onlyElvis} alt="onlyFavorIMG" width={"479px"} />
          </div>
        </div>
      </div>

      <div className="bg-black pb-6">
        <div>
          <h1 className="text-4xl text-white text-center pt-10 font-serif">
            How it Happened
          </h1>
          <div className="text-center p-10">
            {date.map(({ title, id }) => {
              return (
                <button
                  key={id}
                  onClick={() => setToggled(id)}
                  className="button text-2xl text-white m-3 py-2 px-7 font-serif"
                  style={{ border: "1px solid pink", borderRadius: "10px" }}
                >
                  {title}
                </button>
              );
            })}
          </div>
          {date.map(({ title, text, img, id }) => {
            return (
              <>
                {toggled === id ? (
                  <div
                    key={id}
                    className="flex flex-col md:flex-col lg:flex-row items-center gap-4 justify-center m-auto mb-5 bg-pink-600"
                    style={{
                      border: "1px solid pink",
                      width: "75%",
                      borderRadius: "10px",
                      padding: "10px",
                      backgroundColor: "pink",
                    }}
                  >
                    <img
                      src={img}
                      alt="onlyFavorIMG"
                      width={400}
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="text-center md:text-center  lg:text-left">
                      <h2 className="text-black pb-2 text-4xl font-serif">
                        {title}
                      </h2>
                      <p className="text-black font-serif text-wrap p-3">
                        {text}
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
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
        </div>
      </section>

      <div className="text-center" style={bodybg}>
        <h2 className="text-4xl pt-10 pb-5 font-serif">Team</h2>
        <h1 className="text-4xl pb-10 font-serif">Bridesmaids</h1>
        {/* copy past */}
        <div style={{ width: "80%", margin: "auto", padding: "10px" }}>
          <div className="carousel carousel-center p-6 space-x-4 rounded-box">
            <div className="carousel-item flex-col">
              <img src={jhun} className="rounded-box" width={300} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>John Odey</h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={promise} className="rounded-box" width={340} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Promise Peters
                </h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={bf} className="rounded-box" width={340} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Adoga James
                </h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={idm} className="rounded-box" width={300} />
              <div>
                <h2>Ephraim Achema</h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={yinka} className="rounded-box" width={420} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Emmanuel Alagbe
                </h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={adoge} className="rounded-box" width={300} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Adekunle Samuel
                </h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={yf} className="rounded-box" width={400} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  IDAGU Timothy
                </h2>
                <h3 style={{ fontSize: "18px" }}>Bridesmaids</h3>
              </div>
            </div>
          </div>
        </div>

        {/* copy past */}

        <h2 className="text-4xl pt-10 pb-5 font-serif">Team</h2>
        <h1 className="text-5xl pb-10 font-serif">Groomsmen</h1>

        <div style={{ width: "80%", margin: "auto", padding: "10px" }}>
          <div className="carousel carousel-center p-6 space-x-4 rounded-box">
            <div className="carousel-item flex-col">
              <img src={jhun} className="rounded-box" width={300} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>John Odey</h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={promise} className="rounded-box" width={340} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Promise Peters
                </h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={bf} className="rounded-box" width={340} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Adoga James
                </h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={idm} className="rounded-box" width={300} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Ephraim Achema
                </h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={yinka} className="rounded-box" width={420} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Emmanuel Alagbe
                </h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={adoge} className="rounded-box" width={300} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  Adekunle Samuel
                </h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
            <div className="carousel-item flex-col">
              <img src={yf} className="rounded-box" width={400} />
              <div>
                <h2 style={{ fontSize: "22px", padding: "10px" }}>
                  IDAGU Timothy
                </h2>
                <h3 style={{ fontSize: "18px" }}>Groomsmen</h3>
              </div>
            </div>
          </div>
        </div>

        {/* male pics */}
      </div>

      <div style={bodybg}>
        <div>
          <h3 className="text-center text-white pt-10 pb-3 font-serif text-2xl">
            Our Wedding
          </h3>
          <h1 className="text-center text-white pb-10 font-serif text-2xl">
            When & Where
          </h1>

          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-8 pb-10 px-4">
            <div style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "pink",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h2 className="font-serif text-center text-2xl text-black">
                  Traditional Marriage
                </h2>
              </div>

              <div
                style={{
                  border: "1px solid white",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <p className="pt-10 font-serif text-black text-2xl pb-10">
                  Thursday, 16 May. 2024 <br /> 2:00 PM{" "}
                </p>
                <p className="font-serif text-black text-1xl pb-10">
                  Venue: Youth Center Hall, Ado Karu LGA.
                </p>
                <h3 className="font-serif text-black text-2xl pb-10">
                  That the Location
                </h3>
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "pink",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h2 className="font-serif text-center text-2xl text-black">
                  Traditional Marriage
                </h2>
              </div>

              <div
                style={{
                  border: "1px solid white",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <p className="pt-10 font-serif text-black text-2xl pb-10">
                  Thursday, 16 May. 2024 <br /> 2:00 PM{" "}
                </p>
                <p className="font-serif text-black text-1xl pb-10">
                  Venue: Youth Center Hall, Ado Karu LGA.
                </p>
                <h3 className="font-serif text-black text-2xl pb-10">
                  That the Location
                </h3>
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "pink",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <h2 className="font-serif text-center text-2xl text-black">
                  Traditional Marriage
                </h2>
              </div>

              <div
                style={{
                  border: "1px solid white",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <p className="pt-10 font-serif text-black text-2xl pb-10">
                  Thursday, 16 May. 2024 <br /> 2:00 PM{" "}
                </p>
                <p className="font-serif text-black text-1xl pb-10">
                  Venue: Youth Center Hall, Ado Karu LGA.
                </p>
                <h3 className="font-serif text-black text-2xl pb-10">
                  That the Location
                </h3>
              </div>
            </div>
          </div>
        </div>
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

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handclick = () => setNav(!nav);
  const handleNav = () => setNav(false);

  return (
    <nav className="flex items-center w-95 justify-between p-7 list-none">
      <img src="Elsandfavorlogo.png" className="w-24" alt="logo" />

      <ul
        className="hidden md:flex gap-10 text-pink-400 links-side"
        style={{ fontFamily: "initial", fontSize: "20px" }}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/ourTeams">
          <li>Gift</li>
        </Link>
        <Link to="/event">
          <li>Event</li>
        </Link>
        <Link to="/couples">
          <li>Couples</li>
        </Link>
      </ul>
      <div className="md:hidden z-10" onClick={handclick}>
        {nav ? (
          <FaTimes className="text-4xl text-white" />
        ) : (
          <RxHamburgerMenu className="text-4xl text-white" />
        )}
      </div>
      <ul
        className={`${
          nav
            ? "text-white opacity-100 transform translate-x-0 backdrop-blur"
            : "opacity-0 transform -translate-y-full"
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center gap-16 items-center text-2xl`}
      >
        <Link onClick={handleNav} to="/">
          <li>Home</li>
        </Link>
        <Link onClick={handleNav} to="/couples">
          <li>Couples</li>
        </Link>
        <Link onClick={handleNav} to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link onClick={handleNav} to="/event">
          <li>Event</li>
        </Link>
        {/* <Link onClick={handleNav} to="/ourStory">
          <li>Our Story</li>
        </Link> */}
        <Link onClick={handleNav} to="/ourTeams">
          <li>Gift</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

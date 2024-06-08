import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, item }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div class="h-[180px] w-[200px]">
          <img class="h-full w-full object-cover" src={item.img} alt="" />
        </div>
        <h1 class="font-dmserif text-3xl font-bold text-white">{item.name}</h1>
        <p class="mb-3 text-lg italic text-white duration-300">{item.price}</p>
        <p className="font-dmserif text-lg text-white">
          Account Number:{" "}
          <span className="font-bold text-white">9165135178</span>
        </p>
        <p className="font-dmserif text-lg text-white">
          Account Name:{" "}
          <span className="font-bold text-white">Nicklouds Yinka</span>
        </p>
        <p className="font-dmserif text-lg text-white">
          Bank: <span className="font-bold text-white">Opay</span>
        </p>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

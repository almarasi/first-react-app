import React from "react";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  function ShowLabel(e) {
    let label = e.target.previousElementSibling;
    label.classList.add("slideUp");
    if (e.target.value == "") {
      label.classList.remove("slideUp");
    }
  }

  return (
    <div
      className="contact d-flex mb-4 justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="container mt-3">
        <div className="contact-header mt-5 text-center">
          <h2>contact section</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line border me-3 bg-black"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line border ms-3 bg-black"></div>
          </div>
        </div>
        <form action="" className="p-1 mx-auto ">
          <label htmlFor="userName" className="position-relative top-0 ">
            userName :
          </label>
          <input
            onInput={ShowLabel}
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative"
          />
          <label htmlFor="userAge" className="position-relative top-0 ">
            userAge :
          </label>
          <input
            onInput={ShowLabel}
            id="userAge"
            type="number"
            placeholder="userAge"
            name="userAge"
            className="form-control border-0 border-bottom py-3 position-relative"
          />
          <label htmlFor="userEmail" className="position-relative top-0 ">
            userEmail :
          </label>
          <input
            onInput={ShowLabel}
            id="userEmail"
            type="email"
            placeholder="userEmail"
            name="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative"
          />
          <label htmlFor="userPassword" className="position-relative top-0 ">
            userPassword :
          </label>
          <input
            onInput={ShowLabel}
            id="userPassword"
            type="password"
            placeholder="userPassword"
            name="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative"
          />
          <button
            type="button"
            className="btn mt-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}

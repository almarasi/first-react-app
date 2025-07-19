import React from "react";
import "./StartFramework.css";

export default function StartFramework() {
  return (
    <div
      className="home d-flex justify-content-center text-white align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="container mt-5">
        <div className="home-img">
          <img src="/avataaars.svg" alt="hello" />
        </div>
        <div className="home-header text-center">
          <h2>start Framework</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line border me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line border ms-3 bg-white"></div>
          </div>
        </div>
        <div className="skills text-center">
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}

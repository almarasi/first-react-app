import React, { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [imgSrc, setImgSrc] = useState(null);

  const portfolioItems = [
    "/portfolio/poert1.png",
    "/portfolio/port2.png",
    "/portfolio/port3.png",
    "/portfolio/poert1.png",
    "/portfolio/port2.png",
    "/portfolio/port3.png",
  ];

  function openModel(e) {
    const img = e.currentTarget.querySelector("img");
    setImgSrc(img.src);
  }

  function closeModal(e) {
    if (e.target.classList.contains("selected-img")) {
      setImgSrc(null);
    }
  }

  return (
    <div
      className="portfolio d-flex mb-4 justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="container mt-3 position-relative">
        <div className="portfolio-header mt-5 text-center">
          <h2>Portfolio Component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line border me-3 bg-black"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line border ms-3 bg-black"></div>
          </div>
        </div>
        <div className="row g-5">
          {portfolioItems.map((src, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div onClick={openModel} className="portfolio-item">
                <img
                  className="w-100"
                  src={src}
                  alt={`Portfolio item ${index + 1}`}
                />
                <div className="layer">
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        {imgSrc && (
          <div onClick={closeModal} className="selected-img">
            <img src={imgSrc} alt="Selected portfolio item" />
          </div>
        )}
      </div>
    </div>
  );
}

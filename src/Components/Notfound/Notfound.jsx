import React from "react";
import "./Notfound.css"
export default function Notfound() {
  return (
    <div
      className="notfound d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="container mt-3">
        <div className="notfound-header mt-5 text-center">
          <h2>Notfound page 404 error...!</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line border me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line border ms-3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

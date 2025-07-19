import React from "react";
import "./About.css"

export default function About() {
  return (
    <div className="about p-3  d-flex justify-content-center text-white align-items-center" style={{ minHeight: "80vh" }}>
      <div className="container mt-5">
        <div className="about-header text-center">
          <h2>about component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line border me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line border ms-3 bg-white"></div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-5 ">
            <div className="home-item ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="home-item ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

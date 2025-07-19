import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer border border-black ">
      <div className="footer-content p-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-sm-4">
              <div className="footer-card text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-card text-center">
                <h3>AROUND THE WEB</h3>
                <div className="social-media">
                  <i  className="fa-brands fa-facebook mx-1 icon"></i>
                  <i className="fa-brands fa-twitter mx-1 icon"></i>
                  <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                  <i className="fa-solid fa-globe mx-1 icon"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-card text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center  p-3">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}

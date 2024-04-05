"use client";
import React from "react";
import "../styles/PricingStyles.css";
const temp = () => {
  return (
    <>
      <div className="wrapper">
        <input type="radio" name="slider" id="tab-1" />
        <input type="radio" name="slider" id="tab-2" checked />
        <input type="radio" name="slider" id="tab-3" />
        <header>
          <label htmlFor="tab-1" className="tab-1">
            Basic
          </label>
          <label htmlFor="tab-2" className="tab-2">
            Standard
          </label>
          <label htmlFor="tab-3" className="tab-3">
            Team
          </label>
          <div className="slider"></div>
        </header>
        <div className="card-area">
          <div className="cards">
            <div className="row row-1">
              <div className="price-details">
                <span className="price">19</span>
                <p>For beginner use</p>
              </div>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>100 GB Premium Bandwidth</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>FREE 50+ Installation Scripts WordPress Supported</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    One FREE Domain Registration .com and .np extensions only
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Unlimited Email Accounts & Databases</span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="price-details">
                <span className="price">99</span>
                <p>For professional use</p>
              </div>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>Unlimited GB Premium Bandwidth</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    FREE 200+ Installation Scripts WordPress Supported
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Five FREE Domain Registration .com and .np extensions only
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Unlimited Email Accounts & Databases</span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="price-details">
                <span className="price">49</span>
                <p>For team collaboration</p>
              </div>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>200 GB Premium Bandwidth</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    FREE 100+ Installation Scripts WordPress Supported
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    Two FREE Domain Registration .com and .np extensions only
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Unlimited Email Accounts & Databases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button>Choose plan</button>
      </div>
    </>
  );
};

export default temp;

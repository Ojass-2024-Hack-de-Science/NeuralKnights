"use client";
import React from "react";
import "../styles/CustomBtnStyles.css";
import { Button } from "@/components/ui/button";
import { TiTick } from "react-icons/ti";
import "../styles/PricingStyles.css";
import Image from "next/image";
const Pricing = () => {
  return (
    <>
      <div id="mainCoantiner">
        <div class="margin-body">
          <div>
            <div class="starsec"></div>
            <div class="starthird"></div>
            <div class="starfourth"></div>
            <div class="starfifth"></div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-12">
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <div class="title-h1 text-center">
                    <span>
                      <span class="light">pricing </span> table
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3 col-md-3 pricing-column-wrapper">
              <div class="pricing-column">
                <div class="pricing-price-row">
                  <div class="pricing-price-wrapper">
                    <div class="pricing-price">
                      <div class="pricing-cost">$10</div>
                      <div class="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div class="pricing-row-title">
                  <div class="pricing_row_title">tiny</div>
                </div>
                <figure class="pricing-row">Photo sharing school</figure>
                <figure class="pricing-row">
                  <span>Drop out ramen hustle</span>
                </figure>
                <figure class="pricing-row strike">
                  Crush revenue traction
                </figure>
                <figure class="pricing-row strike">
                  Crush revenue traction
                </figure>
                <figure class="pricing-row strike">
                  User base minimum viable
                </figure>
                <figure class="pricing-row strike">Lorem ipsum dolor</figure>
                <div class="pricing-footer">
                  <div class="gem-button-container gem-button-position-center">
                    <a href="#" class="gem-button gem-green">
                      order now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 pricing-column-wrapper">
              <div class="pricing-column">
                <div class="pricing-price-row">
                  <div class="pricing-price-wrapper">
                    <div class="pricing-price">
                      <div class="pricing-cost">$45</div>
                      <div class="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div class="pricing-row-title">
                  <div class="pricing_row_title">small</div>
                </div>
                <figure class="pricing-row">Photo sharing school</figure>
                <figure class="pricing-row">
                  <span style="color: #5f727f;">Drop out ramen hustle</span>
                </figure>
                <figure class="pricing-row">
                  <span style="color: #5f727f;">Crush revenue traction</span>
                </figure>
                <figure class="pricing-row strike">
                  Crush revenue traction
                </figure>
                <figure class="pricing-row strike">
                  User base minimum viable
                </figure>
                <figure class="pricing-row strike">Lorem ipsum dolor</figure>
                <div class="pricing-footer">
                  <div class="gem-button-container gem-button-position-center">
                    <a class="gem-button gem-purpel">order now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 pricing-column-wrapper">
              <div class="pricing-column">
                <div class="pricing-price-row">
                  <div class="pricing-price-wrapper">
                    <div class="pricing-price">
                      <div class="pricing-cost">$99</div>
                      <div class="time">Per Month</div>
                    </div>
                  </div>
                </div>
                <div class="pricing-row-title">
                  <div class="pricing_row_title">medium</div>
                </div>
                <figure class="pricing-row">Photo sharing school</figure>
                <figure class="pricing-row">
                  <span>Drop out ramen hustle</span>
                </figure>
                <figure class="pricing-row">
                  <span style="color: #5f727f;">Crush revenue traction</span>
                </figure>
                <figure class="pricing-row">Crush revenue traction</figure>
                <figure class="pricing-row strike">
                  User base minimum viable
                </figure>
                <figure class="pricing-row strike">Lorem ipsum dolor</figure>
                <div class="pricing-footer">
                  <div class="gem-button-container gem-button-position-center">
                    <a class="gem-button gem-orange">order now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 pricing-column-wrapper">
              <div class="pricing-column">
                <div class="pricing-price-row">
                  <div class="pricing-price-wrapper">
                    <div class="pricing-price">
                      <div style=" " class="pricing-cost">
                        $145
                      </div>
                      <div class="time" style="display:inline-block;">
                        Per Month
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pricing-row-title">
                  <div class="pricing_row_title">large</div>
                </div>
                <figure class="pricing-row">Photo sharing school</figure>
                <figure class="pricing-row">
                  <span style="color: #5f727f;">Drop out ramen hustle</span>
                </figure>
                <figure class="pricing-row">
                  <span style="color: #5f727f;">Crush revenue traction</span>
                </figure>
                <figure class="pricing-row">Crush revenue traction</figure>
                <figure class="pricing-row">User base minimum</figure>
                <figure class="pricing-row strike">Lorem ipsum dolor</figure>
                <div class="pricing-footer">
                  <div class="gem-button-container gem-button-position-center">
                    <a class="gem-button gem-yellow">order now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

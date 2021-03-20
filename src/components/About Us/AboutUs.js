import React from "react";
import "./Aboutus.css";
import abouthero from "../../assets/images/about-hero.svg";
const AboutUs = () => {
  return (
    <>
      <section class="bg-success py-5">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                Easy Buy is the most reliable and trusted fashion store with
                numerous varities and options to choose from. At easy Buy we
                understand your expectation and provide quality fashion product
                to meet your expectations. The fabric used by us is the best in
                the market, which provides utmost comfort and durability. As a
                Online Store we provide the best in class services to provide
                you the ease to shop.
              </p>
            </div>
            <div class="col-md-4">
              <img src={abouthero} alt="About Hero" />
            </div>
          </div>
        </div>
      </section>

      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
              We provide a wide range of services. Our servises are best in class and well efficient
              meeting our client's expectation to the fullest. 
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-truck fa-lg"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-percent"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Promotion</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-user"></i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;


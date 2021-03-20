import React from "react";
import { Link } from "react-router-dom";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import pant from "../../assets/images/pant.jpeg";
import kurtis from "../../assets/images/kurtis.jpeg";
import sweatshirt from "../../assets/images/Sweatshirt.jpeg";

function HomePage() {
  return (
    <>
      <div style={{ backgroundColor: "#e5e5e5" }}>
        {/* <!-- carousel--> */}
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="2000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={carousel1}
                alt="First slide"
                height="700px"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={carousel2}
                alt="Second slide"
                height="700px"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={carousel3}
                alt="Third slide"
                height="700px"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div class="container body-div">
          <h1>Welcome to Easy Buy</h1>
          <hr />
          <span>
            Easy Buy is the most reliable and trusted fashion store with
            numerous varities and options to choose from. At easy Buy we
            understand your expectation and provide quality fashion product to
            meet your expectations. The fabric used by us is the best in the
            market, which provides utmost comfort and durability. As a Online
            Store we provide the best in class services to provide you the ease
            to shop.
            <br />
            <br />
            <Link to="/aboutUs">Know More ...</Link>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Products of The Month</h1>
            <p>
              These are the excellent products of the month, made with fine
              quality fabric, do check them out. Enjoy Shopping!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 p-5 mt-3">
            <Link to="/fashion">
              <a>
                <img src={pant} class="rounded-circle img-fluid border" />
              </a>
              <h5 class="text-center mt-3 mb-3">Pants</h5>
              <p class="text-center">
                <a class="btn btn-success">Go Shop</a>
              </p>
            </Link>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <Link to="/fashion">
              <a>
                <img src={kurtis} class="rounded-circle img-fluid border" />
              </a>
              <h2 class="h5 text-center mt-3 mb-3">Kurtis</h2>
              <p class="text-center">
                <a class="btn btn-success">Go Shop</a>
              </p>
            </Link>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <Link to="/fashion">
              <a>
                <img src={sweatshirt} class="rounded-circle img-fluid border" />
              </a>
              <h2 class="h5 text-center mt-3 mb-3">Sweatshirts</h2>
              <p class="text-center">
                <a class="btn btn-success">Go Shop</a>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomePage;

import React, { useState } from "react";
import { connect } from "react-redux";

function SearchBar({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <br />
      <br />
      <br />
      <form class="form-inline my-2 my-lg-0 d-flex justify-content-center align-items-center container">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Here !"
          aria-label="Search"
          size="60"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {products
        .filter((values) => {
          if (searchTerm == "") {
            return null;
          } else if (
            values.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return values;
          }
        })
        .map((value) => {
          return (
            <div
              style={{
                display: "inline-block",
                padding: " 50px 150px",
                marginLeft: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                class="card"
                style={{
                  width: "285px",
                  height: "700px",
                  backgroundColor: "#e5e5e5",
                }}
                id={value.id}
              >
                <img
                  class="card-img-top"
                  src={value.image_link}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{value.name}</h5>
                  <hr />
                  <div
                    class="card-text"
                    style={{
                      fontSize: "11px",
                      overflow: "auto",
                      height: "100%",
                    }}
                  >
                    {value.description}
                  </div>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">$ {value.price}</li>
                </ul>
                <button class="btn-primary">Add to cart</button>
              </div>
            </div>
          );
        })}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.fetchProductsReducer.products,
  };
};

export default connect(mapStateToProps, null)(SearchBar);

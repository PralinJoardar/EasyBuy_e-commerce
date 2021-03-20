import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Cart({ products, addToCart }) {
  
  console.log("product is", products);
  const displayCart = () => {
    return (
      <div onLoad>
        <br />
        <br />
        {products.length !== 0 ? (
          products.map((product) => (
            <div
              style={{
                display: "inline-flex",
                padding: " 50px 150px",
                backgroundColor: "#e5e5e5",
                marginLeft: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                class="card"
                style={{ width: "285px", height: "700px" }}
                id={product.product.id}
              >
                <img
                  class="card-img-top"
                  src={product.product.image_link}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{product.product.name}</h5>
                  <hr />
                  <div
                    class="card-text"
                    style={{
                      fontSize: "11px",
                      overflow: "auto",
                      height: "100%",
                    }}
                  >
                    {product.product.description}
                  </div>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">$ {product.product.price}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>cart is empty !! shop now .... go back</p>
        )}
      </div>
    );
  };
  return (
    <>
      {displayCart()}
      {products.length === 0 ? (
        <p></p>
      ) : (
        <h1 style={{ padding: "50px" }}>Total Amount : </h1>
      )}
      <br />
      <br />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.addToCartReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

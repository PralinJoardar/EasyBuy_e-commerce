import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Cart({ products, addToCart }) {
  let total = 0;
  console.log("product is", products);
  const handleCheckout = () => {
    console.log("ijijj");
  };
  const displayCart = () => {
    return (
      <div>
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
                  <p style={{ color: "white" }}>
                    {(total = total + parseFloat(product.product.price))}
                  </p>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: "50px" }}>
            <h2>Cart is Empty ! </h2>
            <h5>shop now...</h5>
          </div>
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
        <h1 style={{ padding: "50px" }}>Total Amount : {total}</h1>
      )}
      {products.length !== 0 ? (
        <div style={{ paddingBottom: "50px", paddingLeft: "50px" }}>
          <button class="btn btn-lg btn-success" onClick={handleCheckout}>
            Checkout
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button class="btn btn-lg btn-danger">Clear Cart</button>
        </div>
      ) : (
        <p></p>
      )}
      <br />
      <br />
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("state is", state);
  return {
    products: state.addToCartReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

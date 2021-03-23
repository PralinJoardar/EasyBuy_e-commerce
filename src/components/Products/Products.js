import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../Redux/actions/fetchProductsAction";
import { addToCart } from "../../Redux/actions/addToCartAction";
import { cartQuantityAction } from "../../Redux/actions/cartQuantityAction";
function Products({
  products,
  loading,
  error,
  errorMessage,
  getProducts,
  addToCart,
  cartQuantity,
}) {
  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    cartQuantity();
  };

  return (
    <>
      <SearchBar />
      {loading ? (
        <div class="container">
          <br />
          <br />
          <br />
          <h3>Loading Items !</h3>
          <h6> Please Wait...</h6>
        </div>
      ) : (
        <p></p>
      )}
      {error ? (
        <div class="container">
          {console.log(errorMessage)}
          <br />
          <br />
          <br />
          <h3>Oops Something is wrong !</h3>
          <Link to="/">
            <h6> Back to Home...</h6>
          </Link>
        </div>
      ) : (
        <p></p>
      )}

      {console.log(products)}
      <br />
      <br />
      {products.map((product) => (
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
            id={product.id}
          >
            <img
              class="card-img-top"
              src={product.image_link}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <hr />
              <div
                class="card-text"
                style={{
                  fontSize: "11px",
                  overflow: "auto",
                  height: "100%",
                }}
              >
                {product.description}
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">$ {product.price}</li>
            </ul>
            <button
              class="btn-primary"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
      <br />
      <br />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.fetchProductsReducer.products,
    loading: state.fetchProductsReducer.loading,
    error: state.fetchProductsReducer.error,
    errorMessage: state.fetchProductsReducer.errorMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addToCart: (product) => dispatch(addToCart(product)),
    cartQuantity: () => dispatch(cartQuantityAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

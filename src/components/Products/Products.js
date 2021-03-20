import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/actions/fetchProductsAction";
import { addToCart } from "../../Redux/actions/addToCartAction";
function Products({ products, getProducts, addToCart }) {
  useEffect(() => {
    getProducts();
  }, []);
  const handleAddToCart = (id) => {
    addToCart(id)
  };
  return (
    <>
      <SearchBar />
      {console.log(products)}
      <br />
      <br />
      {products.map((value) => (
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
            <button class="btn-primary" onClick={()=>{handleAddToCart(value.id)}}>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

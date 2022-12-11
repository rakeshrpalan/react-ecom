import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del } from "../redux/action";

const Wishlist = () => {
  const statee = useSelector((statee) => statee.handleWishlist);
  const dispatch = useDispatch();

  const handleDel = (item) => {
    dispatch(del(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Wishlist is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">{product.qty}</p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {statee.length === 0 && emptyCart()}
      {statee.length !== 0 && statee.map(cartItems)}
    </div>
  );
};

export default Wishlist;

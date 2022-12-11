import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action/index";
import { addWishlist } from "../redux/action/index";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const addWish = (product) => {
    dispatch(addWishlist(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={70} />
          <Skeleton height={20} width={150} />
          <Skeleton height={30} width={150} />

          <Skeleton height={30} width={150} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 ">
          <h4 className="text-uppercase text-black-50"> {product.category}</h4>
          <h1 className="display-5 ">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead "> {product.description}</p>
          <button
            className="btn btn-outline-dark "
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-dark mx-3"
            onClick={() => addWish(product)}
          >
            Add to Wishlist
          </button>
          <NavLink to="/cart" className="btn btn-dark ">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;

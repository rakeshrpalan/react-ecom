// import Product from "../../components/Product";

export const addCart = (Product) => {
  return {
    type: "ADDITEM",
    payload: Product,
  };
};

export const delCart = (Product) => {
  return {
    type: "DELITEM",
    payload: Product,
  };
};

export const addWishlist = (Product) => {
  return {
    type: "ADD",
    payload: Product,
  };
};

export const del = (Product) => {
  return {
    type: "DEL",
    payload: Product,
  };
};

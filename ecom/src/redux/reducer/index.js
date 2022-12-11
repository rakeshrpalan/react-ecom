import handleCart from "./handleCart.js";
import { combineReducers } from "redux";
import handleWishlist from "./handleWishlist.js";

const rootReducers = combineReducers({
  handleCart,
  handleWishlist,
});

export default rootReducers;

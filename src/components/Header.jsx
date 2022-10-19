import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/features/authSlice";
import Cart from "./Cart";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <div className="h-10 flex items-center justify-end container mx-auto space-x-3">
      {user?.result?._id ? (
        <Link to="/addproduct">
          <div className="text-xs">ADD PRODUCT</div>
        </Link>
      ) : (
        <div className="text-xs">ABOUT US</div>
      )}
      {user?.result?._id ? (
        <Link to="/logout">
          <div className="text-xs" onClick={() => handleLogout()}>
            LOGOUT
          </div>
        </Link>
      ) : (
        <Link to="/login">
          <div className="text-xs">LOGIN</div>
        </Link>
      )}
      {user?.result?._id ? (
        <></>
      ) : (
        <Link to="/register">
          <div className="text-xs">JOIN</div>
        </Link>
      )}
      <div className="text-xs">MYPAGE</div>
      <Link to="/cart">
        <div className="text-xs">CART {quantity}</div>
      </Link>
    </div>
  );
};

export default Header;

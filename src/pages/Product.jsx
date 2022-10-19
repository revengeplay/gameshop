import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/cartSlice";

const Product = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <div className="container mx-auto grid grid-rows-3 grid-flow-col gap-3 justify-around mt-5">
      {/* 이미지 */}
      <div className="row-span-3 w-full">
        <div className="border-2">
          <img className="w-[500px]" src={product.imgFile} alt="파일" />
        </div>
      </div>
      {/* 이미지 */}
      {/* 상품 */}
      <div className="border-y-2 col-span-2 ">
        <div className="flex flex-col ">
          <div>
            <div className="h-20  text-start pt-6 text-xl font-bold pl-6">
              {product.title}
            </div>
          </div>
          <div className="flex border-y-2">
            <div className=" h-10 text- pl-6 pt-2 flex flex-1">가격</div>
            <div className="flex flex-1 pt-2"> 60000원</div>
          </div>
          <div className="border-y-1 min-h-[400px]">
            <div className="pt-1 pl-6">{product.desc}</div>
          </div>
        </div>
      </div>
      {/* 상품 */}
      {/* 조작 */}
      <div className="row-span-2 col-span-2">
        <div className="border-y-2 flex bg-gray-100 ">
          <div className="flex flex-1 pt-[6px]">{product.title}</div>
          <div className="flex flex-1 justify-end">
            <div className="cursor-pointer my-[10px]">
              <FiMinus onClick={() => handleQuantity("dec")} />
            </div>
            <div>
              <div className="w-[30px] h-[30px] border rounded-xl flex items-center justify-center my-[4px]">
                {quantity}
              </div>
            </div>
            <div className="cursor-pointer my-[10px]">
              <FiPlus onClick={() => handleQuantity("inc")} />
            </div>
          </div>
          <div className="flex flex-1 justify-end pr-5 pt-[6px]">
            {product.price}원
          </div>
        </div>
        <div className="flex justify-end h-12 space-x-2 pt-2">
          <div
            className="bg-gray-700 rounded-lg pt-3 text-white w-24 h-12 text-center cursor-pointer"
            onClick={handleClick}
          >
            장바구니
          </div>
          <div className="bg-indigo-500 text-white rounded-lg pt-3 w-24 h-12 text-center cursor-pointer">
            바로구매
          </div>
        </div>
      </div>
      {/* 조작 */}
    </div>
  );
};

export default Product;

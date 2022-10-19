import React from "react";
import { useDispatch, useSelector } from "react-redux";
import justdance from "../asset/images/justdance2023.jpg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { increaseProduct } from "../redux/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const upCart = () => {
    dispatch(increaseProduct(quantity));
    console.log(quantity);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex bg-gray-200">
        <div className=" w-48 text-center">이미지</div>
        <div className=" w-full text-center">상품정보</div>
        <div className=" w-24 text-center">판매가</div>
        <div className=" w-24 text-center">수량</div>
        <div className=" w-24 text-center">합계</div>
        <div className=" w-24 text-center">삭제</div>
      </div>
      {cart.products.map((product) => (
        <div>
          <div className="flex">
            <div className=" w-48 text-center">
              <img src={product.imgFile} alt="" />
            </div>
            <div className=" w-full text-left pt-14">{product.title}</div>
            <div className=" w-24 text-center pt-14">{product.price}원</div>
            <div className=" w-24 text-center pt-10 flex flex-col items-center">
              <div className="flex justify-center cursor-pointer">
                <MdKeyboardArrowUp onClick={upCart} />
              </div>
              <div className="w-[30px] h-[30px] border rounded-xl flex items-center justify-center">
                {product.quantity}
              </div>
              <div className="flex justify-center cursor-pointer">
                <MdKeyboardArrowDown />
              </div>
            </div>

            <div className=" w-24 text-center pt-14">
              {product.price * product.quantity}원
            </div>
            <div className=" w-24 text-center pt-14">삭제</div>
          </div>
          <hr className=" border-gray-200 my-2" />
        </div>
      ))}

      <hr className=" border-gray-200 my-2" />
      <div className="text-end">{cart.total}원</div>
      <div className="flex justify-end mt-2">
        <div className="bg-indigo-400 h-[35px] w-[80px] rounded-xl pt-[5px] text-white text-center cursor-pointer">
          버튼
        </div>
      </div>
    </div>
  );
};

export default Cart;

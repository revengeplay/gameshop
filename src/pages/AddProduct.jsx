import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";
import { createProduct } from "../redux/features/productSlice";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  desc: "",
  tags: [],
  price: "",
};
const AddProduct = () => {
  const [productData, setProductData] = useState(initialState);
  const { title, desc, tags, price, categories } = productData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc && tags && price) {
      const updatedProductData = { ...productData };

      dispatch(createProduct({ updatedProductData, navigate, toast }));
    }
  };
  return (
    <div className="container mx-auto justify-center items-center flex flex-col">
      <div className="px-4 py-5 ">
        <h3 className="text-lg font-semibold text-gray-900">상품등록</h3>
      </div>
      <div className="border-2 border-gray-200 w-3/4">
        <div>
          <div className=" px-4 py-5 flex space-x-2 border-b-2 justify-between mr-4">
            <div className="text-sm font-medium">상품이름</div>
            <input
              className="mt-1 text-sm  border-2 h-8 text-end"
              onChange={onInputChange}
              type="text"
              value={title}
              name="title"
              placeholder="상품이름"
            />
          </div>
          <div className=" px-4 py-5 flex justify-between border-b-2">
            <div className="text-sm font-medium ">상품가격</div>
            <input
              className="mt-1 text-sm border-2 text-gray-900 text-end mr-4 h-8"
              onChange={onInputChange}
              type="number"
              value={price}
              name="price"
              placeholder="상품가격"
            />
          </div>
          <div className=" px-4 py-5 flex space-x-6 border-b-2">
            <div className="text-sm font-medium ">상품설명</div>
            <textarea
              className="mt-1 text-sm text-gray-900 h-40 w-11/12 border-2"
              onChange={onInputChange}
              type="text"
              value={desc}
              name="desc"
              placeholder="상품설명"
            />
          </div>
          <div className=" px-4 py-5 flex justify-between border-b-2">
            <div className="text-sm font-medium ">카테고리</div>
            <input
              className="mt-1 text-sm border-2 text-gray-900 text-end mr-4 h-8"
              onChange={onInputChange}
              type="text"
              value={categories}
              name="categories"
              placeholder="카테고리"
            />
          </div>
          <div className=" px-4 py-5 ">
            <div className="text-sm font-medium ">상품이미지등록</div>
            <div className="mt-1 text-sm text-gray-900 ">
              <div className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <div className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <AiOutlinePaperClip
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">파일</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <FileBase
                      type="file"
                      multiple={false}
                      className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                      onDone={({ base64 }) =>
                        setProductData({ ...productData, imgFile: base64 })
                      }
                    >
                      이미지등록
                    </FileBase>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end mt-3">
        <div
          className="w-20 h-10 bg-indigo-600 rounded-lg text-white text-center pt-[10px]"
          onClick={handleSubmit}
        >
          등록
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

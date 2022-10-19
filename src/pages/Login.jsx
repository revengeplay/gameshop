import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="flex flex-col items-center mt-10 pt-6 sm:justify-center ">
      <div className=" text-2xl uppercase font-medium">Login</div>
      <div className="flex flex-col w-1/5 mt-1 mb-2">
        <input
          className="border-b-2 border-gray-200 h-10"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onInputChange}
          name="email"
        />
        <input
          className="border-b-2 border-gray-200 h-10"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onInputChange}
          name="password"
        />
      </div>
      <div
        className=" bg-slate-600 w-1/5 text-white h-11 rounded-xl text-center pt-[11px] cursor-pointer"
        onClick={handleSubmit}
      >
        로그인
      </div>
      <div className="w-1/5 flex space-x-1 mt-2">
        <input type="checkbox" />
        <div className="text-left text-xs">아이디저장</div>
      </div>
      <div className="flex space-x-1">
        <div className=" text-gray-400 font-light text-sm">아이디찾기</div>
        <div className="border-l-2 border-gray-300"></div>
        <div className=" text-gray-400 font-light text-sm">비밀번호찾기</div>
        <div className="border-l-2 border-gray-300"></div>
        <div className=" text-gray-400 font-light text-sm">회원가입</div>
      </div>
      <div className="cursor-pointer">소셜로그인</div>
    </div>
  );
};

export default Login;

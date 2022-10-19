import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, name, confirmPassword } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("비밀번호가 일치하지 않습니다.");
    }
    if (email && password && name && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 pt-6 sm:justify-center ">
      <div className=" text-2xl uppercase font-medium">register</div>
      <div className="flex flex-col w-1/5 mt-1 mb-2">
        <input
          className="border-b-2 border-gray-200 h-10"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onInputChange}
          name="email"
          required
          invalid
        />
        <input
          className="border-b-2 border-gray-200 h-10"
          type="text"
          placeholder="이름"
          value={name}
          onChange={onInputChange}
          name="name"
          required
          invalid
        />
        <input
          className="border-b-2 border-gray-200 h-10"
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onInputChange}
          required
          invalid
        />
        <input
          className="border-b-2 border-gray-200 h-10"
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={onInputChange}
          name="confirmPassword"
          required
          invalid
        />
      </div>
      <div
        className=" bg-slate-600 w-1/5 text-white h-11 rounded-xl text-center pt-[11px] cursor-pointer"
        onClick={handleSubmit}
      >
        회원가입
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
      <div>소셜로그인</div>
    </div>
  );
};

export default Register;

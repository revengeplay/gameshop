import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Autohrization = `bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (FormData) => API.post("/users/signin", FormData);
export const signUp = (FormData) => API.post("/users/signup", FormData);

export const createProduct = (productData) => API.post("/product", productData);

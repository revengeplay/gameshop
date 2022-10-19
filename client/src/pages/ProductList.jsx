import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/product/find?category=${cat}`
            : "http://localhost:5000/product/find"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ [e.target.name]: value });
  };

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/product/");
  //       setProducts(res.data);
  //     } catch (err) {}
  //   };
  //   getProducts();
  // }, []);

  return (
    <div>
      <div className="flex justify-between container mx-auto">
        <div>
          <select
            name="platform"
            className=" border p-[10px] mr-[20px]"
            onChange={handleFilters}
          >
            <option>전체</option>
            <option>NINTENDO</option>
            <option>PS5</option>
            <option>PS4</option>
            <option>XBOX</option>
            <option>PC</option>
          </select>
        </div>
        <div>
          <select
            className=" border p-[10px] mr-[20px]"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price(asc)</option>
            <option calue="desc">Price(dasc)</option>
          </select>
        </div>
      </div>
      <div>
        {products.map((res, index) => (
          <div className="flex flex-col space-y-1 justify-center items-center">
            <Link to={`/product/${res._id}`}>
              <div className=" border-2 p-10 rounded-lg w-auto">
                <img
                  className=" w-72"
                  key={index}
                  src={res.imgFile}
                  alt="상품"
                />
              </div>
              <div>{res.title}</div>
              <div>{res.price}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

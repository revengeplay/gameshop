import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./Products.css";

const PER_PAGE = 8;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product/");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = products
    .slice(offset, offset + PER_PAGE)
    .map((res, index) => (
      <div className="flex flex-col space-y-1 justify-center items-center">
        <Link to={`/product/${res._id}`}>
          <div className=" border-2 p-10 rounded-lg w-auto">
            <img className=" w-72" key={index} src={res.imgFile} alt="상품" />
          </div>
          <div>{res.title}</div>
          <div>{res.price}</div>
        </Link>
      </div>
    ));

  const pageCount = Math.ceil(products.length / PER_PAGE);

  return (
    <div className="flex space-x-2 container mx-auto flex-col mt-10">
      {/* {products.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
      <div className="grid grid-cols-4 space-x-3">{currentPageData}</div>
      <div>
        <ReactPaginate
          className=""
          previousLabel="<"
          pageCount={pageCount}
          nextLabel=">"
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </div>
  );
};

export default Products;

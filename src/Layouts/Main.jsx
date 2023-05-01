import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PaginatedProducts from "../Components/PaginatedProducts";
import BreadCrumbs from "../Components/BreadCrumbs";
import FilterSection from "../Components/FilterSection";

export default function Main({ productList, breadcrumbs, setProductsList }) {
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const productNewList = productList.slice(itemOffset, endOffset);
  const currentItems = productNewList;
  const pageCount = Math.ceil(productList.length / itemsPerPage);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    filterProduct();
  }, [sortBy]);

  const filterProduct = () => {
    if (sortBy === "None" || sortBy === "") {
      setProductsList(productList);
    } else if (sortBy === "featured") {
      const filteredFeaturedProducts = productList.filter((p) => p.featured);
      const filteredNotFeaturedProducts = productList.filter(
        (p) => !p.featured
      );
      setProductsList([
        ...filteredFeaturedProducts,
        ...filteredNotFeaturedProducts,
      ]);
    } else if (sortBy === "price-high-t-low") {
      const filteredProducts = productList.sort((a, b) => b.price - a.price);
      setProductsList([...filteredProducts]);
    } else if (sortBy === "price-low-t-high") {
      const filteredProducts = productList.sort((a, b) => a.price - b.price);
      console.log(filteredProducts);
      setProductsList([...filteredProducts]);
    }
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <Fragment>
      <div className="col-span-6">
        <div className="flex justify-between items-center">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <FilterSection setSortBy={setSortBy} />
        </div>

        <PaginatedProducts currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          nextLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset hover:bg-sky-500"
          previousClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset hover:bg-sky-500"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset hover:bg-sky-500"
          breakLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          previousLabel="Previous"
          activeClassName="bg-sky-600 text-white"
          containerClassName="flex items-center justify-around  bg-white px-4 py-3 sm:px-6"
          renderOnZeroPageCount={null}
        />
      </div>
    </Fragment>
  );
}

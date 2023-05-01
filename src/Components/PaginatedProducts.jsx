import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineCopy, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function PaginatedProducts({ currentItems }) {
  return !currentItems.length ? (
    <div className="flex justify-center items-center mt-32">
      <span className="text-xl text-gray-600">No Data</span>
    </div>
  ) : (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
      {currentItems &&
        currentItems.map((item, i) => (
          <div
            key={item.id}
            className="w-full max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#" className="relative">
              <img
                className="pb-4 rounded-t-lg w-full "
                src={item.thumbnail}
                alt="product image"
              />
              <div className="absolute top-3 right-3 bg-sky-600 rounded-sm p-2">
                <AiOutlineShoppingCart className="w-6 h-6" />
              </div>
            </a>

            <div className="px-3 pb-5">
              {item.featured && (
                <div className="flex justify-between items-en">
                  <span className="text-xs font-bold text-grey-900 text-left px-2 bg-blue-200 rounded-md">
                    * Featured
                  </span>
                </div>
              )}

              <div className="flex justify-between items-start">
                <Link to={`/product-details/${item.id}`}>
                  <h5 className="text-base text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </Link>
                <button className="text-gray-300 hover:text-red-500">
                  <div className="w-10 h-10 float-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                </button>{" "}
              </div>

              <div className="flex items-center mt-2.5 mb-5 text-left">
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <AiFillStar className="text-yellow-600" />
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {item.rating} & 100Likes
                </span>
              </div>
              <div className="flex items-center justify-start gap-1">
                <img
                  src={item.thumbnail}
                  className="w-5 h-5 rounded-full z-0"
                />
                <span className="text-xs">Avater Joe's</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>
              </div>
              {item.featured ? (
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900 dark:text-white">
                    Featured
                  </span>
                </div>
              ) : (
                ""
              )}

              <div className=" flex justify-between items-end">
                <span className="text-sm text-grey-900 font-normal text-left">
                  {item.description}
                </span>
                <span>
                  <AiOutlineCopy
                    className="cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.host}/product-details/${item.id}`
                      );
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

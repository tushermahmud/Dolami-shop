import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../sampleData";
const ProductDetails = () => {
    const [product, setProduct] = useState(null)
    const [mainPicture, setMainPicture] = useState(null);
    const [pictures, setPictures] =useState([])

    const productId = useParams()
  useEffect(()=>{
    let singleProduct = allProducts.find(prod => prod.id.toString() === productId.id);
    setProduct(singleProduct);
    setMainPicture(singleProduct.thumbnail);
    setPictures(singleProduct.images)
  },[product])


  const starsNumber = product && Math.floor(product.rating);
  const isHalfStar = product&& !Number.isInteger(product.rating);
  const emptyStars = product&& 5 - Math.ceil(product.rating);

  return (
    <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700 col-span-8">
      <div className="flex flex-col lg:flex-row">
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          <span className="self-start ml-10">
            <button className="text-gray-300 hover:text-red-500">
              <div className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                ;
              </div>
            </button>
          </span>
          <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
            <img
              src={mainPicture}
              alt={mainPicture}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="mt-6 mx-auto">
            <ul className="grid grid-flow-col auto-cols-fr gap-4">
              {pictures
                .slice(0, 4) // Here you can manage the number of pictures displayed
                .map((picture, index) => (
                  <li
                    key={index}
                    className={`col-span-1 p-1 w-16 rounded border-2 ${
                      index === mainPicture
                        ? "border-yellow-600"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      className="block h-full rounded overflow-hidden"
                      onClick={() => setMainPicture(pictures[index])}
                    >
                      <img
                        src={picture}
                        alt={picture}
                        className="object-contain"
                      />
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">
          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">
              {product && product.title}
            </h1>
            <p className="mt-10 text-base text-gray-500">
              {product && product.description}
            </p>
          </div>

          <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
            <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">
              {product && product.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <label htmlFor="quantity" className="sr-only">
                Select the quantity
              </label>
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0"
              />
              <label htmlFor="color" className="sr-only">
                Select your color
              </label>
              <select
                name="color"
                id="color"
                className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
              >
                <option value="">Color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
              </select>
              <label htmlFor="size" className="sr-only">
                Select your size
              </label>
              <select
                name="size"
                id="size"
                className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
              >
                <option value="">Size</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>

          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">$</span>
              {product && product.price}
            </span>
            <button
              type="button"
              className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-sky-600 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
              Add to cart
            </button>
            <div className="m-2.5 flex items-center">
              <div className="flex items-center space-x-1">
                {[...Array(starsNumber)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </span>
                ))}
                {isHalfStar && (
                  <span className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                )}
                {[...Array(emptyStars)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                ))}
              </div>
              <a
                href={"#"}
                className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline"
              >{`${100} reviews`}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

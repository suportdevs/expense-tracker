import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { default as api } from "../store/apiSlice";

const Modal = ({ modalToggle, setModalToggle }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [storeCategory] = api.useStoreCategoryMutation();
  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    console.log(name, color);
    await storeCategory({ name, color }).unwrap();
  };
  return (
    <div className="relative flex justify-center items-center">
      <div
        id="menu"
        className={
          `w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 ` +
          modalToggle
        }
      >
        <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
          <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-15 px-10 md:px-10 xl:py-10 xl:px-10">
            <h1
              role="main"
              className="text-xl dark:text-white lg:text-xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
            >
              New Category
            </h1>
            <div className="mt w-80">
              <form onSubmit={handleCategorySubmit}>
                <Input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
                <Input
                  type="text"
                  placeholder="Color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                ></Input>
                <Button className="w-full bg-indigo-500 text-white p-2 rounded-lg font-semibold text-lg">
                  Submit
                </Button>
              </form>
            </div>
            <button
              onClick={(e) => setModalToggle("hidden")}
              className="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              aria-label="close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

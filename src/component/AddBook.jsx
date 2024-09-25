import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux-Store/bookSlice";

export const AddBook = () => {
  const [formDetails, setFormDetails] = useState({});
  const dispatch = useDispatch();
  const bookArray = useSelector((store) => store.fetch.bookItems);
  const formreff = useRef();
  function handler(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }
  function show(e) {
    e.preventDefault();
    if (
      formDetails.author == "" ||
      formDetails.country == "" ||
      formDetails.imageLink == "" ||
      formDetails.language == "" ||
      formDetails.pages == "" ||
      formDetails.title == "" ||
      formDetails.year == ""
    ) {
      return;
    } else {
      const idUpdate = { ...formDetails, id: bookArray.length + 1 };
      dispatch(addItem(idUpdate));
      setFormDetails({});

      formreff.current.reset();
    }
  }

  return (
    <div className="pb-10">
      <h1 className="flex bg-teal-900 h-20 items-center justify-center text-3xl font-serif">
        Add YourBook
      </h1>
      <div className="w-full flex justify-center mt-5">
        <div className="md:w-1/2 w-full  flex justify-center rounded-xl shadow-2xl shadow-slate-900 pt-5 pb-5">
          <form onSubmit={(e) => show(e)} className="mt-5" ref={formreff}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Author"
              name="author"
              onChange={handler}
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="country"
              placeholder="Country"
              onChange={handler}
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="imageLink"
              placeholder="Image URL"
              onChange={handler}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="language"
              placeholder="Language"
              onChange={handler}
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="pages"
              placeholder="Pages"
              onChange={handler}
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              placeholder="title"
              onChange={handler}
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="year"
              placeholder="Year"
              onChange={handler}
              required
            />

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="border-2 border-slate-900 pr-4 pl-4 pt-1 pb-1 rounded-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

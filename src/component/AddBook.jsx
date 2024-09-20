import React from "react";
import { useState } from "react";
export const AddBook = () => {
  const [formDetails, setFormDetails] = useState({});
  function handler(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }
  function show(e) {
    e.preventDefault();

    if (
      formDetails.title == "" ||
      formDetails.author == "" ||
      formDetails.data == ""
    ) {
      alert("All Fileds are required");
    } else {
      console.log(formDetails);
    }
  }
  return (
    <div>
      <h1 className="flex bg-teal-900 h-20 items-center justify-center text-3xl font-serif">
        Add YourBook
      </h1>
      <div className="w-full flex justify-center mt-5">
        <div className="md:w-1/2 w-full  flex justify-center rounded-xl shadow-2xl shadow-slate-900 pt-5 pb-5">
          <form onSubmit={show} className="mt-5">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => handler(e)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Author"
              name="author"
              onChange={handler}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="data"
              onChange={handler}
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

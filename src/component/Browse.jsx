import { useSelector } from "react-redux";
import { useState } from "react";
import PopularBook from "./PopularBook";

export const Browse = () => {
  const bookDetailsz = useSelector((store) => store.fetch.bookItems);
  const [inputVal, setInputVal] = useState("");
  const [filterBooks, setfilterBooks] = useState(bookDetailsz);
  const [searchBy, setSearchBy] = useState("bookname");
  console.log(searchBy);
  const searchByAuthor = (e) => {
    setInputVal(e.target.value);
    if (searchBy === "author") {
      const byAuthor = bookDetailsz.filter((item) => {
        return item.author.toUpperCase().includes(inputVal.toUpperCase());
      });
      setfilterBooks(byAuthor);
      console.log(filterBooks);
    } else if (searchBy === "bookname") {
      const byTitle = bookDetailsz.filter((item) => {
        return item.title.toUpperCase().includes(inputVal.toUpperCase());
      });
      setfilterBooks(byTitle);
      console.log(byTitle);
    }
  };
  return (
    <div className="flex flex-col md:items-center bg-blue-900">
      <div className="w-full md:w-1/2 text-center ">
        <select className="rounded-xl w-full text-center">
          <option
            value="author"
            onClick={(e) => setSearchBy(e.target.value)}
            className=""
          >
            Search by Author
          </option>
          <option
            value="bookname"
            onClick={(e) => setSearchBy(e.target.value)}
            className=""
          >
            Search by Book Name
          </option>
        </select>
      </div>
      <div className=" md:w-1/2 w-full">
        <input
          type="text"
          onChange={(e) => searchByAuthor(e)}
          className="w-full rounded-xl mt-2 outline-none text-center"
          placeholder="Search Book"
        />
      </div>
      <div>
        {filterBooks.map((item) => {
          console.log(item);
        })}
      </div>
    </div>
  );
};

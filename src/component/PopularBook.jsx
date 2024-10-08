import { Link } from "react-router-dom";
import { baseUrl } from "./Utls/Mock";
function PopularBook(props) {
  let { author, country, imageLink, language, title, year, pages, id } =
    props.item;

  return (
    <div className="p-4 md:w-1/5 h-auto sm:mb-0 mb-6 bg-slate-200 shadow-2xl shadow-black rounded-xl  md:hover:scale-105 transition-all w-4/5">
      <div className="rounded-xl w-full">
        <img
          src={`${baseUrl}${imageLink}`}
          className="w-full h-56"
          alt="book-Image"
        />
      </div>

      <div className="h-3/6 content-end flex flex-col">
        <h2 className="text-xl font-medium title-font text-gray-900">
          {title.slice(0, 15)}
        </h2>
        <p className="text-base leading-relaxed mt-2 w-full"></p>
        <h3>Author : {author.slice(0, 15)}</h3>

        <p>Language : {language}</p>
        <p>Release Year : {year}</p>
        <p>Country : {country.slice(0, 17)}</p>
        <p>Pages : {pages}</p>
        <p className="text-indigo-500 inline-flex items-center mt-3"></p>
        <Link to={`/home/${title}`}>
          <button className=" border-2 border-black pt-1 pb-1 pr-3 pl-3 rounded-xl mt-2 hover:bg-green-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
export default PopularBook;

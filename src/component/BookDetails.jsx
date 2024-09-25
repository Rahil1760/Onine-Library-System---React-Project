import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseUrl } from "./Utls/Mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function BookDetails() {
  const data = useParams();

  const selector = useSelector((store) => store.fetch.bookItems);
  const pickedBook = selector.filter((item) => {
    return item.title == data.title;
  });
  return (
    <>
      <div className="flex mt-5 p-4 rounded-xl shadow-2xl shadow-black justify-between pb-40 md:h-lvh">
        <div className="self-center md:space-y-10 text-sm">
          <h3 className="text-xl md:text-2xl font-bold italic">
            {pickedBook[0].title}
          </h3>
          <h4 className="text-sm md:text-xl font-bold italic underline">
            {pickedBook[0].author}
          </h4>
          <p className="md:text-xl font-semibold">
            Language : {pickedBook[0].language}
          </p>
          <p className="md:text-xl font-semibold">
            Country : {pickedBook[0].country}
          </p>
          <p className="md:text-xl font-semibold">
            Pages : {pickedBook[0].pages}
          </p>
          <div>
            <Link to={"/"}>
              <button className="mt-6 border-2 border-black pt-1 pb-1 pr-3 pl-3 rounded-xl ">
                Home
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-left" />
              </button>
            </Link>
            <Link to={"/browsebook"}>
              <button className="mt-1 md:mt-6 border-2 border-black pt-1 pb-1 pr-3 pl-3 rounded-xl md:ml-2">
                Browse Book
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-left" />
              </button>
            </Link>
          </div>
        </div>
        <div className="h-auto md:w-1/3  flex justify-end">
          <img
            src={`${baseUrl}${pickedBook[0].imageLink}`}
            className="rounded-full w-2/3"
            alt="book Image"
          />
        </div>
      </div>
    </>
  );
}

export default BookDetails;

//
//       "author": "Doris Lessing",
//       "country": "United Kingdom",
//       "imageLink": "images/the-golden-notebook.jpg",
//       "language": "English",
//       "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
//       "pages": 688,
//       "title": "The Golden Notebook",
//       "year": 1962,
//       "id":57
//     },

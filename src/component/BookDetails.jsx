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
  console.log(pickedBook);
  return (
    <>
      <div className="flex mt-5 p-4 rounded-xl shadow-2xl shadow-black justify-between">
        <div className="self-center space-y-10">
          <h3 className="text-2xl font-bold">{pickedBook[0].title}</h3>
          <h4 className="text-xl font-bold italic underline">
            {pickedBook[0].author}
          </h4>
          <p className="text-xl font-semibold">
            Language : {pickedBook[0].language}
          </p>
          <p className="text-xl font-semibold">
            Country : {pickedBook[0].country}
          </p>
          <p className="text-xl font-semibold">Pages : {pickedBook[0].pages}</p>
          <Link to={"/"}>
            <button className="mt-6 border-2 border-black pt-1 pb-1 pr-3 pl-3 rounded-xl ">
              Home
              <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-left" />
            </button>
          </Link>
        </div>
        <div>
          <img
            src={`${baseUrl}${pickedBook[0].imageLink}`}
            className="rounded-full"
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

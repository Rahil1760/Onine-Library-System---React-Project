import { fetchData } from "../Redux-Store/bookSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PopularBook from "./PopularBook";
export const Home = () => {
  const dispatch = useDispatch();
  const det = dispatch(fetchData);
  const data = useSelector((store) => store.fetch.bookItems);
  const popularBooks = data.filter((item) => {
    return item.id < 5;
  });
  return (
    <div>
      <h1 className="mt-2 mb-4 text-center bg-teal-700 w-1/2 rounded-tr-full hover:w-full duration-500 hover:rounded-none">
        Online-Library
      </h1>
      <p className="text-center md:text-xl">
        We are delighted to have you here in our haven of knowledge,
        imagination, and endless stories. Whether you're a lifelong reader, a
        curious explorer, our library is your space to discover new worlds, dive
        into rich histories, and expand your mind.
      </p>
      <div className="flex flex-wrap gap-10 justify-center mt-10 pb-20">
        {popularBooks.map((item) => {
          return <PopularBook item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

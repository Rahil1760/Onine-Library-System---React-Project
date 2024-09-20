import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bg-teal-900 h-9 flex items-center">
        <ul className="flex space-x-8 font-bold">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/browsebook"}>
            <li className="cursor-pointer">Browse Books</li>
          </Link>
          <Link to={"/add-book"}>
            <li className="cursor-pointer">Add Book</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

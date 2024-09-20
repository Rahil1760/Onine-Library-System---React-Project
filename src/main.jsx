import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./component/Home.jsx";
import { Browse } from "./component/Browse.jsx";
import { AddBook } from "./component/AddBook.jsx";
import Navbar from "./component/Sections/Navbar.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/browsebook",
    element: <Browse />,
  },
  {
    path: "/add-book",
    element: <AddBook />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);

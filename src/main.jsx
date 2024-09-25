import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./component/Home.jsx";
import { Browse } from "./component/Browse.jsx";
import { AddBook } from "./component/AddBook.jsx";
import BookDetails from "./component/BookDetails.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
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
      {
        path: "home/:title",
        element: <BookDetails />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);

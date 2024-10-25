import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useState } from "react";
import { categories } from "./pages/Home/components/Categories";
import Product from "./pages/Product";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home filteredCategories={filteredCategories} />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

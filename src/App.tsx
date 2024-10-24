
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";



function App() {
   const router = createBrowserRouter([
     {
       path: "/",
       element: (
         <RootLayout
           
         />
       ),
       errorElement: <ErrorPage />,
       children: [
         {
           path: "/",
           element: <Home />,
         },
         {
           path: "/shop",
           element: <Shop />,
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

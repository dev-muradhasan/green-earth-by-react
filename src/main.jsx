import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Layout/RootLayout";
import Contact from "./Pages/Contact";
import PlantDetails from "./Components/PlantDetails";
import axios from "axios";
import Spinner from "./Components/Spinner";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        index: true,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
        Component: Home,
      },
      {
        path: "/home",
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/plant-details/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetails,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);

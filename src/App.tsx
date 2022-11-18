import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import Collection from "./pages/Collections";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";

import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/collections/shoes", element: <Collection /> },
        { path: "/collections/shoes/:id", element: <ItemDetail /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

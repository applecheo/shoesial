import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useAppDispatch } from "./custom/hooks";
import Layout from "./layout";
import Checkout from "./pages/Checkout";
import Collection from "./pages/Collections";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import { fetchItemData } from "./Store/item-actions";

import "./App.css";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItemData());
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/collections/shoes", element: <Collection /> },
        { path: "/collections/shoes/:id", element: <ItemDetail /> },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

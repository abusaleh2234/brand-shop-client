
import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import AddProduct from "./Component/AddProduct/AddProduct";
import Products from "./pages/Products/Products";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import UpdateProduct from "./Component/UpdateProduct/UpdateProduct";
import MyCart from "./pages/MyCart/MyCart";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorElement from "./Component/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/brands")
        },
        {
          path: "/addproduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: "/mycart",
          element: <MyCart></MyCart>,
          loader: () => fetch("http://localhost:5000/addCart")
        },
        {
          path:"/products/:name",
          element: <Products></Products>,
          loader: ({params}) => fetch(`http://localhost:5000/productsItem/${params.name}`)
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`)
        },
        {
          path: "/updateProduct/:id",
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

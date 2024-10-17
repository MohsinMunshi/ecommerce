import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import TopBar from "./Components/TopBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <><TopBar /><Dashboard /></>,
  },
  {
    path:"/users",
    element:<><TopBar /><Users/></>,
  },
  {
    path:"/products",
    element:<><TopBar /><Products/></>,
  },
  {
    path:"/cart",
    element:<><TopBar /><Cart/></>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { Navigate } from "react-router-dom";
import SignUpPage from "./components/signup/SignUpPage";
import Home from "./components/pages/Home";
import LoginPage from "./components/login/LoginPage";
import Shop from "./components/shop/Shop";
import { Private } from "./PrivateRoute";


const routes = [{
  path: '/signup',
  element: <SignUpPage />
},

{
  path: '/home',
  element: <Home />
},
{
  path: '/',
  element: <Navigate to="/home" />
},
{
  path:'/login',
  element:<LoginPage/>
},
{
  path:'/shop',
  element: <Private Component={Shop} />
}
]

export default routes
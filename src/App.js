import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss"
import { useContext } from "react";
import { darkContext } from "./context/darkContext";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



function App() {
  const {currentUser} = useContext(AuthContext);

  const {darkMode}=useContext(darkContext)
  // console.log(darkMode)

  // Create a client
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>

        <div className={`theme-${darkMode?"dark":"light"}`}>
          <Navbar></Navbar>
          <div style={{ display: "flex" }}>
            <LeftBar></LeftBar>
            <div style={{ flex: 6 }}>
              <Outlet></Outlet>
            </div>
            <RightBar></RightBar>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout></Layout>,
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/profile/:id",
          element: <Profile></Profile>,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login></Login>,
    },
    {
      path: "/Register",
      element: <Register></Register>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

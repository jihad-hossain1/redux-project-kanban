import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import SingleChatDetails from "../pages/SingleChatDetails";
import AddPost from "../components/AddPost";
import SignUp from "../components/log/SignUp";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../components/log/SignIn";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        ),
      },

      {
        path: "/chat/:id",
        element: <SingleChatDetails />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/addPost",
        element: <AddPost />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default routes;

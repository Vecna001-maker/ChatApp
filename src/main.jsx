import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <HomePage/>
    ),
  },
  {
    path: "/chats",
    element:<ChatPage/>
  },
]);

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

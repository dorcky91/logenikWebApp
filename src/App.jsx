import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./ui/layout/Layout";
import { Inicio } from "./pages/Inicio";
import { Contacto } from "./pages/Contacto";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contacto />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};

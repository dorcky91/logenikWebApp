import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./ui/layout/Layout";
import { Inicio } from "./pages/Inicio";
import { Contacto } from "./pages/Contacto";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { useEffect } from "react";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad";
import { TerminosServicio } from "./pages/TerminosServicio";
import { Faq } from "./pages/Faq";

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
        path: "privacy",
        element: <PoliticaPrivacidad />,
      },
      {
        path: "terms",
        element: <TerminosServicio />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación en ms
    });
  }, []);

  return <RouterProvider router={router} />;
};

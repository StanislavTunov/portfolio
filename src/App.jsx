import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutVr from "./pages/AboutVr/Aboutvr";
import FrondEnd from "./pages/FrondEnd/FrondEnd";

import AppHeading from "./components/AppHeading/AppHeading";

import "./App.css";

import ContactMe from "./pages/ContactMe/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppHeading />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "frondend",
        element: <FrondEnd />,
      },
      {
        path: "aboutvr",
        element: <AboutVr />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactme",
        element: <ContactMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

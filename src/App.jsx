import "./App.css";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import StartFramework from "./Components/StartFramework/StartFramework";
import Notfound from "./Components/Notfound/Notfound";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StartFramework />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      { path: "*", element: <Notfound /> }
    ],
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={x} />
    </>
  );
}

export default App;

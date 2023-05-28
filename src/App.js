import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactUs from "./pages/ContactUs/ContactUs";
import RootLayout from "./pages/RootLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactUs from "./pages/ContactUs/ContactUs";
import RootLayout from "./pages/RootLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

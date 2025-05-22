import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Contact /> },
      { path: "add", element: <AddContact /> }
    ]
  }
]);

export default router;

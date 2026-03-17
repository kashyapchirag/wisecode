import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProblemSet from "./pages/ProblemSet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <ProblemSet />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

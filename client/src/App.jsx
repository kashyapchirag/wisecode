import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProblemSet from "./pages/ProblemSet";
import ProblemDetail from "./pages/ProblemDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/problems",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <ProblemSet />,
        },
        {
          path: ":slug",
          element: <ProblemDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import Home from "./components/Home";
import Japamala from "./components/Japamala";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/JapaMala",
      element: <Japamala />,
    },
  ]);
  return (
    <div className="bg-orange-500 h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

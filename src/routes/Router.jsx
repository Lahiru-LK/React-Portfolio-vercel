import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const ErrorElement = ({ error }) => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Unexpected Application Error!</h1>
    <pre>{error?.message || "Something went wrong."}</pre>
  </div>
);

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
      errorElement: <ErrorElement />,
    },
  ],
  { basename: `/${repoName}` }
);

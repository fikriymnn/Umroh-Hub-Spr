import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Authentications/Login";
import DepartureDetail from "./pages/DepartureDetail/DepartureDetail";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="PT CBL" />

                <HomePage />
              </>
            }
          />
          <Route
            path="/Authentications"
            element={
              <>
                <PageTitle title="Authentications" />

                <Login />
              </>
            }
          />
          <Route
            path="/DepartureDetail"
            element={
              <>
                <PageTitle title="DepartureDetail" />

                <DepartureDetail />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

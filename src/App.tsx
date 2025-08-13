import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Authentications/Login";
import DepartureDetail from "./pages/DepartureDetail/DepartureDetail";
import Package from "./pages/Package/Package";
import NewPackage from "./pages/Package/NewPackage/NewPackage";
import DetailNewPackage from "./pages/Package/NewPackage/[id]/DetailPackage";
import JemaahData from "./pages/Jemaah/JemaahData";

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
            path="/PackageDetail"
            element={
              <>
                <PageTitle title="PackageDetail" />

                <Package />
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
           <Route
            path="/PackageDetail/NewPackage"
            element={
              <>
                <PageTitle title="NewPackage" />

                <NewPackage/>
              </>
            }
          />
            <Route
            path="/PackageDetail/NewPackage/:id"
            element={
              <>
                <PageTitle title="NewPackage" />

                <DetailNewPackage/>
              </>
            }
          />
           <Route
            path="/JemaahData"
            element={
              <>
                <PageTitle title="Jemaah Data" />

                <JemaahData/>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

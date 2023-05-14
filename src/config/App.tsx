import { FC } from "react";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ProtectedRoute } from "../utils/protectedRoute";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ProfilePage } from "../pages/ProfilePage";
import { DoctorPage } from "../pages/DoctorPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ServicePage } from "../pages/ServicePage";
import { useStores } from "../utils/use-stores-hook";

const App: FC = () => {
  const {
    authStore: { isAuthorized },
  } = useStores();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/doctor/:id" element={<DoctorPage />} />
        <Route path="/department/:id" element={<ServicesPage />} />
        <Route path="/service/:departmentId/:id" element={<ServicePage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;

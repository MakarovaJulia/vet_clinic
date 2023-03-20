import { FC } from 'react';
import '../App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {ProtectedRoute} from "../utils/protectedRoute";
import {LoginPage} from "../pages/LoginPage";
import {SignUpPage} from "../pages/SignUpPage";
import {ProfilePage} from "../pages/ProfilePage";
import {ServicesFilterPage} from "../pages/ServicesFilterPage";
import {DoctorsFilterPage} from "../pages/DoctorsFilterPage";
import {DoctorPage} from "../pages/DoctorPage";
import {ServicePage} from "../pages/ServicePage";

const App: FC = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route element={<ProtectedRoute isAllowed={true} />}>
                <Route path="/profile" element={<ProfilePage />}/>
            </Route>
            <Route path="/services_filter" element={<ServicesFilterPage />}/>
            <Route path="/doctors_filter" element={<DoctorsFilterPage />}/>
            <Route path="/doctor/:id" element={<DoctorPage />}/>
            <Route path="/service/:id" element={<ServicePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
    );
};

export default App;

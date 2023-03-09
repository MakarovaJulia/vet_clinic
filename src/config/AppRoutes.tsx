import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { RoutesList } from './RoutesList';
import {SignUpPage} from "../pages/SignUpPage";
import {LoginPage} from "../pages/LoginPage";
import {DoctorPage} from "../pages/DoctorPage";
import {DoctorsFilterPage} from "../pages/DoctorsFilterPage";
import {ServicesFilterPage} from "../pages/ServicesFilterPage";
import {ProfilePage} from "../pages/ProfilePage";
import {ServicePage} from "../pages/ServicePage";

const RoutesListConfig = [
    { path: RoutesList.MainPage, element: MainPage },
    { path: RoutesList.SignUpPage, element: SignUpPage },
    { path: RoutesList.LoginPage, element: LoginPage },
    { path: RoutesList.DoctorPage, element: DoctorPage },
    { path: RoutesList.DoctorsFilterPage, element: DoctorsFilterPage },
    { path: RoutesList.ServicesFilterPage, element: ServicesFilterPage },
    { path: RoutesList.ProfilePage, element: ProfilePage },
    { path: RoutesList.ServicePage, element: ServicePage },
];

export const AppRoutes = () => {
    return (
            <Routes>
                {RoutesListConfig.map(({ ...route }) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Routes>
    );
};

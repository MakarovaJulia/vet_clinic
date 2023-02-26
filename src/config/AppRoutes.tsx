import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { RoutesList } from './RoutesList';
import {SignUpPage} from "../pages/SignUpPage";

const RoutesListConfig = [
    { path: RoutesList.MainPage, element: MainPage },
    { path: RoutesList.SignUpPage, element: SignUpPage },
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

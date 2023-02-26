import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { RoutesList } from './RoutesList';

const RoutesListConfig = [
    { path: RoutesList.MainPage, element: MainPage },
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

import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/HomePage").then(module => ({ default: module.HomePage })));
const RegisterPage = lazy(() => import("../pages/RegisterPage").then(module => ({ default: module.RegisterPage })));
const LoginPage = lazy(() => import("../pages/LoginPage").then(module => ({ default: module.LoginPage })));
const TasksPage = lazy(() => import("../pages/TasksPage").then(module => ({ default: module.TasksPage })));

export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            Refreshing user...
        </div>
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
                    }
                />
                <Route
                    path="/tasks"
                    element={
                        <PrivateRoute redirectTo="/login" component={<TasksPage />} />
                    }
                />
            </Route>
        </Routes>
    );
};

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const AuthNav = () => {
    const linkClass = ({ isActive }) =>
        clsx(
            "px-4 py-2 rounded-lg font-medium transition-all duration-300",
            isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "text-gray-300 hover:text-white hover:bg-white/5"
        );

    return (
        <div className="flex gap-4">
            <NavLink className={linkClass} to="/register">
                Register
            </NavLink>
            <NavLink className={linkClass} to="/login">
                Log In
            </NavLink>
        </div>
    );
};

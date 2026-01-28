import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className="flex items-center gap-6">
            <p className="text-gray-300 font-medium hidden sm:block">
                Welcome, <span className="text-blue-400 font-bold">{user.name}</span>
            </p>
            <button
                type="button"
                onClick={() => dispatch(logout())}
                className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-500/30"
            >
                Logout
            </button>
        </div>
    );
};

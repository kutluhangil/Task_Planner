import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        // Sticky header for better UX
        <header className="fixed top-0 left-0 w-full z-50 glass border-b border-gray-700/50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 hover:scale-105 transition-transform"
                >
                    TaskPlanner
                </Link>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    );
};

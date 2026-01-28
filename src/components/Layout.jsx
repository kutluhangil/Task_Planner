import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white">
            <AppBar />
            <main className="container mx-auto px-6 pt-24 pb-12">
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#1F2937',
                        color: '#fff',
                        border: '1px solid #374151'
                    }
                }}
                reverseOrder={false}
            />
        </div>
    );
};

export const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 animate-fade-in-up">
                Task Manager
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
                Organize your work and life, finally. <br />
                Become focused, organized, and calm with Task Manager.
            </p>
        </div>
    );
};

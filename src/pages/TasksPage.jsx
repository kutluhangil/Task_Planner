import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/tasks/operations';
import { selectIsLoading } from '../redux/tasks/selectors';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { TaskList } from '../components/TaskList/TaskList';

export const TasksPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                My Tasks
            </h1>
            <TaskForm />
            <TaskList />
            {isLoading && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pointer-events-none">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>}
        </div>
    );
};

import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { selectTasks, selectIsLoading, selectError } from "../../redux/tasks/selectors";
import { AnimatePresence } from "framer-motion";

export const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    if (isLoading && !tasks.length) return <div className="text-center py-8 text-blue-400">Loading tasks...</div>;
    if (error) return <div className="text-center py-8 text-red-400">Error: {error}</div>;

    return (
        <div className="space-y-4">
            <AnimatePresence mode="popLayout">
                {tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))}
            </AnimatePresence>
            {!isLoading && tasks.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    <p>No tasks yet. Add one above!</p>
                </div>
            )}
        </div>
    );
};
